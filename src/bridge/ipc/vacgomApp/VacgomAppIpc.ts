import {
  ExractResponse,
  ExtractRequest,
  InferMessage,
  IpcMessageHandler,
  MessageHandler,
  MessageListener,
  VacgomIpcMessageWithId,
  WithId,
} from '../message';
import { AbstractRawIpc } from '@/bridge/ipc/rawIpc/AbstractRawIpc';
import { InternalListener } from '@/bridge/ipc/rawIpc/FlutterWebviewIpc';

export class VacgomAppIpc {
  private messages: Record<string, IpcMessageHandler<any>> = {};
  
  constructor(private rawIpc: AbstractRawIpc) {
    this.rawIpc.addListener((message) => {
      this.listenAsyncResponse(JSON.parse(message));
    });
  }
  
  addListener<M>(listener: MessageListener<M>): void {
    this.rawIpc.addListener(
      this.getInternalListener<M>(listener),
    );
  }
  
  async send<T>(message: T): Promise<void> {
    const data = JSON.stringify(message);
    console.log(`${data}`);
    this.rawIpc.send(data);
  }
  
  async invoke<T>(message: ExtractRequest<T>): Promise<ExractResponse<T>> {
    return new Promise((resolve) => {
      const id = Math.random().toString(36).substr(2, 9);
      
      const identifiedMessage: WithId<typeof message> = {
        id,
        ...message,
      };
      
      this.messages[id] = (response) => {
        resolve(response);
      };
      
      this.rawIpc.send(JSON.stringify(identifiedMessage));
      
      console.log(`invoke (${id})\n${JSON.stringify(identifiedMessage)}`);
    });
  }
  
  addHandler<M>(
    type: ExtractRequest<M>['type'],
    handler: MessageHandler<InferMessage<ExtractRequest<M>>, ExractResponse<M>>,
  ): void {
    this.addListener<ExtractRequest<M>>(async (message) => {
      if (message.type != type) return;
      
      const result = await handler(message);
      await this.send<ExractResponse<M>>(result);
    });
  }
  
  private listenAsyncResponse(message: VacgomIpcMessageWithId<never, never>) {
    if (!message.id) return;
    
    if (this.messages[message.id]) {
      this.messages[message.id](message);
      delete this.messages[message.id];
      
      console.log(`(${message.id})\n${JSON.stringify(message)}\n`);
    }
  }
  
  private getInternalListener<M>(handle: MessageListener<M>): InternalListener {
    return (message: string) => {
      console.log(`${JSON.parse(message)}`);
      return handle(JSON.parse(message));
    };
  }
}
