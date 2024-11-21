import { useVacBridge } from '@/bridge/VacBridgeProvider';
import { PATH } from '@/routes/path';
import { TestNavigation } from '@/pages/TestNavigation';

export default function Home() {

  return <div>
    홈
    <TestNavigation />
  
  </div>;
}