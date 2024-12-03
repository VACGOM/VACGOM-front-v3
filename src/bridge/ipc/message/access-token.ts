import { VacgomIpcMessage, VacgomIpcMessagePair } from '@/bridge/ipc/message/types';

export type AccessTokenRequest = VacgomIpcMessage<'AccessTokenRequest', null>
export type AccessTokenResponse = VacgomIpcMessage<'AccessTokenResponse', string | null>

export type AccessTokenMessage = VacgomIpcMessagePair<AccessTokenRequest, AccessTokenResponse>