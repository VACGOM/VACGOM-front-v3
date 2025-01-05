import { VacgomIpcMessage } from './types';

export type VacgomAppNativeRouteRequest = VacgomIpcMessage<
  'VacgomAppNativeRouteRequest',
  {
    route: string;
    replace: boolean;
  }
>;

export type WebviewRouteRequest = VacgomIpcMessage<
  'WebviewRouteRequest',
  {
    route: string;
    replace: boolean;
  }
>;

export type RouteGoBackRequest = VacgomIpcMessage<'RouteGoBackRequest', null>;

export type ExternalWebviewRouteRequest = VacgomIpcMessage<
  'ExternalWebviewRouteRequest',
  {
    url: string;
  }
>;
