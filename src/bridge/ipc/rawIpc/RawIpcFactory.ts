import { AbstractRawIpc } from '@/bridge/ipc/rawIpc/AbstractRawIpc';
import { FlutterWebviewIpc } from '@/bridge/ipc/rawIpc/FlutterWebviewIpc';

export class RawIpcFactory {
  static async create(): Promise<AbstractRawIpc | null> {
    console.log('create called');
    try {
      return await retry(3, () => {
        return new FlutterWebviewIpc();
      });
      
    } catch (error) {
      console.error('Failed to create FlutterWebviewIpc', error);
      return null;
    }
  }
}

const retry = <T>(maxTries: number, fn: () => T): Promise<T> => {
  return new Promise((resolve, reject) => {
    let tries = 0;
    
    const tryFn = () => {
      tries++;
      
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
