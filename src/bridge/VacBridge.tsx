import { VacgomAppIpc } from '@/bridge/ipc/vacgomApp/VacgomAppIpc';
import { ExternalWebviewRouteRequest, RouteGoBackRequest, WebviewRouteRequest } from '@/bridge/ipc/message/route';
import { AbstractVacBridge } from '@/bridge/AbstractVacBridge';
import { Path } from '@/routes/path';
import { DatePickerMessage } from '@/bridge/ipc/message/date';
import { AccessTokenMessage } from '@/bridge/ipc/message/access-token';
import { RegisterTokenMessage } from '@/bridge/ipc/message/register-token';

export class VacBridge implements AbstractVacBridge {
  constructor(private vacgomIpc: VacgomAppIpc) {
  }
  
  back() {
    this.vacgomIpc.send<RouteGoBackRequest>({ type: 'RouteGoBackRequest', data: null });
  }
  
  routeTo(path: Path, option: { replace?: boolean, popup?: boolean }) {
    if (path.type == 'webview') {
      this.vacgomIpc.send<WebviewRouteRequest>({
        type: 'WebviewRouteRequest',
        data: { route: path.path, replace: option.replace ?? false },
      });
    } else if (path.type == 'external') {
      this.vacgomIpc.send<ExternalWebviewRouteRequest>({
        type: 'ExternalWebviewRouteRequest',
        data: { url: path.path, isPopup: option.popup ?? false },
      });
    }
  }
  
  async getDate(): Promise<Date> {
    const response = await this.vacgomIpc.invoke<DatePickerMessage>({
      type: 'DatePickerRequest',
      data: {
        initialDate: new Date(),
      },
    });
    
    const date = response.data.date != null ? new Date(response.data.date) : null;
    if (!date) throw new Error(`Invalid date ${response.data}`);
    
    return date;
  }
  
  async getAccessToken(): Promise<string | null> {
    const response = await this.vacgomIpc.invoke<AccessTokenMessage>({
      type: 'AccessTokenRequest',
      data: null,
    });
    
    return response.data;
  }
  
  async getRegisterToken(): Promise<string | null> {
    const response = await this.vacgomIpc.invoke<RegisterTokenMessage>({
      type: 'RegisterTokenRequest',
      data: null,
    });
    
    return response.data;
  }
}