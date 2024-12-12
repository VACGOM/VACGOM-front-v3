import { VacgomIpcMessage, VacgomIpcMessagePair } from '@/bridge/ipc/message/types';

export type DatePickerRequest = VacgomIpcMessage<'DatePickerRequest', {
  initialDate: Date;
}>
export type DatePickerResponse = VacgomIpcMessage<'DatePickerResponse', {
  date: Date | null;
}>

export type DatePickerMessage = VacgomIpcMessagePair<DatePickerRequest, DatePickerResponse>