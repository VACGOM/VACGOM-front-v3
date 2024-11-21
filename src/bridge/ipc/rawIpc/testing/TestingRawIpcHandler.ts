import { ExternalWebviewRouteRequest, WebviewRouteRequest } from '@/bridge/ipc/message/route';

export class TestingRawIpcHandler {
  handle(message: string): void {
    const parsedMessage = JSON.parse(message);
    switch (parsedMessage.type) {
      case 'ExternalWebviewRouteRequest':
        this.handleExternalWebviewRouteRequest(parsedMessage);
        break;
      case 'WebviewRouteRequest':
        this.handleWebviewRouteRequest(parsedMessage);
        break;
      default:
        console.error('Unknown message type:', parsedMessage.type);
    }
  }
  
  private handleExternalWebviewRouteRequest(message: ExternalWebviewRouteRequest): void {
    window.open(message.data.url, '_blank');
  }
  
  private handleWebviewRouteRequest(message: WebviewRouteRequest): void {
    if(message.data.replace) {
      window.location.replace(message.data.route);
    }else {
      window.location.href = message.data.route;
    }
  }
}