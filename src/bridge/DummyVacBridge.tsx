import { AbstractVacBridge } from '@/bridge/AbstractVacBridge';
import { Path, PATH, webviewPATH } from '@/routes/path';

export class DummyVacBridge implements AbstractVacBridge {
  back(): void {
    history.back();
  }

  routeTo(path: Path, option: { replace?: boolean; popup?: boolean }): void {
    location.href = path.path;
  }

  async getDate(): Promise<Date> {
    const str = prompt('Enter date');
    if (!str) throw new Error('Invalid date');

    const date = new Date(str);
    if (isNaN(date.getTime())) throw new Error('Invalid date');

    return date;
  }

  async getAccessToken(): Promise<string | null> {
    console.log('getAccessToken');
    console.log();
    return process.env.NEXT_PUBLIC_ACCESS_TOKEN ?? null;
  }

  async getRegisterToken(): Promise<string | null> {
    console.log('getRegisterToken');
    return process.env.NEXT_PUBLIC_REGISTER_TOKEN ?? null;
  }
}
