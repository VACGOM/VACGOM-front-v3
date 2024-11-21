import { EventEmitter } from 'eventemitter3';
import { AbstractRawIpc } from '@/bridge/ipc/rawIpc/AbstractRawIpc';
import { TestingRawIpcHandler } from '@/bridge/ipc/rawIpc/testing/TestingRawIpcHandler';
import { InternalListener } from '@/bridge/ipc/rawIpc/flutter/FlutterWebviewIpc';

export class TestingRawIpc implements AbstractRawIpc {
  private eventEmitter = new EventEmitter();
  
  constructor() {
  }
  
  public addListener(listener: InternalListener) {
    this.eventEmitter.addListener('message', listener);
  }
  
  public send(message: string): void {
    new TestingRawIpcHandler().handle(message);
  }
  
  public emit(message: string): void {
    this.eventEmitter.emit('message', message);
  }
}
