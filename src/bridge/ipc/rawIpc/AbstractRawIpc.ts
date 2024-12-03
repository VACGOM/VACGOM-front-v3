export type RawMessageListener = (message: string) => void;

export interface AbstractRawIpc {
  addListener(listener: RawMessageListener): void;
  
  send(message: string): void;
}