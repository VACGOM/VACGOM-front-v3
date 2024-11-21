import { AbstractRawIpc } from '@/bridge/ipc/rawIpc/AbstractRawIpc';
import { FlutterWebviewIpc } from '@/bridge/ipc/rawIpc/flutter/FlutterWebviewIpc';
import { TestingRawIpc } from '@/bridge/ipc/rawIpc/testing/TestingRawIpc';

export class RawIpcFactory {
  static async create(): Promise<AbstractRawIpc> {
    console.log('create called');
    try {
      const flutterWebviewIpc = await retry(3, () => {
        console.log('truing..');
        return new FlutterWebviewIpc();
      });
      
      return flutterWebviewIpc;
      
    } catch (error) {
      console.error('Failed to create FlutterWebviewIpc', error);
      return new TestingRawIpc();
    }
  }
  
  static async isFlutterWebviewAvailable(): Promise<boolean> {
    try {
      await retry(3, () => {
        return new FlutterWebviewIpc();
      });
      
      return true;
    } catch (error) {
      return false;
    }
  }
}

const retry = <T>(maxTries: number, fn: () => T): Promise<T> => {
  return new Promise((resolve, reject) => {
    let tries = 0;
    
    const tryFn = () => {
      tries++;
      
      console.log('tryFn called');
      try {
        resolve(fn());
      } catch (error) {
        if (tries >= maxTries) {
          reject(error);
        } else {
          setTimeout(tryFn, 100);
        }
      }
    };
    
    tryFn();
  });
};
