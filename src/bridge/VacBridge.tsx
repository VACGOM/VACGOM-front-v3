import { VacgomAppIpc } from '@/bridge/ipc/vacgomApp/VacgomAppIpc';
import {
  ExternalWebviewRouteRequest,
  RouteGoBackRequest,
  VacgomAppNativeRouteRequest,
  WebviewRouteRequest,
} from '@/bridge/ipc/message/route';
import { AbstractVacBridge } from '@/bridge/AbstractVacBridge';
import { Path } from '@/routes/path';

export class VacBridge implements AbstractVacBridge{
  constructor(private vacgomIpc: VacgomAppIpc) {
  }
  
  back() {
    this.vacgomIpc.send<RouteGoBackRequest>({ type: 'RouteGoBackRequest', data: null });
  }
  
  routeTo(path: Path, option: {replace?: boolean, popup?: boolean}) {
    if(path.type == "webview") {
      this.vacgomIpc.send<WebviewRouteRequest>({ type: 'WebviewRouteRequest', data: { route: path.path, replace: option.replace ?? false } });
    } else if (path.type == "external") {
      this.vacgomIpc.send<ExternalWebviewRouteRequest>({ type: 'ExternalWebviewRouteRequest', data: { url: path.path, isPopup: option.popup ?? false } });
    }
  }
}