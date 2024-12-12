import { Path } from '@/routes/path';

export interface AbstractVacBridge {
  back(): void;
  
  routeTo(path: Path, option: { replace?: boolean, popup?: boolean }): void;
  
  getDate(): Promise<Date>;
  
  getAccessToken(): Promise<string | null>;
  
  getRegisterToken(): Promise<string | null>;
}