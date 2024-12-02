import { VacgomIpcMessage, VacgomIpcMessagePair } from '@/bridge/ipc/message/types';

export type DatePickerRequest = VacgomIpcMessage<'DatePickerRequest', null>
export type DatePickerResponse = VacgomIpcMessage<'DatePickerResponse', string | null>

export type DatePickerMessage = VacgomIpcMessagePair<DatePickerRequest, DatePickerResponse>