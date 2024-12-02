import { EventEmitter } from 'eventemitter3';
import { AbstractRawIpc } from '@/bridge/ipc/rawIpc/AbstractRawIpc';

export type InternalPostMessage = (message: string) => void;
export type InternalListener = (message: string) => void;

declare global {
  interface Window {
    flutter_inappwebview: {
      callHandler?: (handlerName: string, message: string) => void;
    };
    webviewPostMessage?: (message: string) => void;
  }
}

export class FlutterWebviewIpc implements AbstractRawIpc {
  private eventEmitter = new EventEmitter();
  private postMessageToFlutter: InternalPostMessage;
  
  constructor() {
    const flutterCallHandler = window.flutter_inappwebview?.callHandler;
    
    console.log({ flutterCallHandler });
    if (!flutterCallHandler) throw new Error('백곰 앱과 연결할 수 없습니다.');
    
    this.postMessageToFlutter = (message: string) => {
      flutterCallHandler('message', message);
    };
    
    window.webviewPostMessage = (message: string) => {
      this.eventEmitter.emit('message', message);
    };
  }
  
  public addListener(listener: InternalListener) {
    this.eventEmitter.addListener('message', listener);
  }
  
  public send(message: string): void {
    return this.postMessageToFlutter(message);
  }
}
