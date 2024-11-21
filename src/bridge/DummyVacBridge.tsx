import { VacgomAppIpc } from '@/bridge/ipc/vacgomApp/VacgomAppIpc';
import {
  ExternalWebviewRouteRequest,
  RouteGoBackRequest,
  VacgomAppNativeRouteRequest,
  WebviewRouteRequest,
} from '@/bridge/ipc/message/route';
import { AbstractVacBridge } from '@/bridge/AbstractVacBridge';

export class DummyVacBridge implements AbstractVacBridge {
  back(): void {
  }
  
  pushExternalWebsite(url: string): void {
  }
  
  pushNative(route: string): void {
  }
  
  pushWebview(route: string): void {
  }
  
  replaceNative(route: string): void {
  }
  
  replaceWebview(route: string): void {
  }
  
}