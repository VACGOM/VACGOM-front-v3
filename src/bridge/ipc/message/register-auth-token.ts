import { VacgomIpcMessage } from '@/bridge/ipc/message/types';

export type RegisterAuthTokenRequest = VacgomIpcMessage<
  'SaveAuthTokenRequest',
  {
    accessToken: string;
    refreshToken: string;
  }
>;
