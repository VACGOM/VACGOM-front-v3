import { VacgomIpcMessage, VacgomIpcMessagePair } from '@/bridge/ipc/message/types';

export type RegisterTokenRequest = VacgomIpcMessage<'RegisterTokenRequest', null>
export type RegisterTokenResponse = VacgomIpcMessage<'RegisterTokenResponse', string | null>

export type RegisterTokenMessage = VacgomIpcMessagePair<RegisterTokenRequest, RegisterTokenResponse>