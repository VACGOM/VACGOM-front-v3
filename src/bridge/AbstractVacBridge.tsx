import { VacgomAppIpc } from '@/bridge/ipc/vacgomApp/VacgomAppIpc';
import {
  ExternalWebviewRouteRequest,
  RouteGoBackRequest,
  VacgomAppNativeRouteRequest,
  WebviewRouteRequest,
} from '@/bridge/ipc/message/route';
import { Path } from '@/routes/path';

export interface AbstractVacBridge{
  back(): void
  routeTo(path: Path, option: {replace?: boolean, popup?: boolean}): void
}