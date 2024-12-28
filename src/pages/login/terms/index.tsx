import { useVacBridge } from '@/bridge/VacBridgeProvider';
import { TestNavigation } from '@/pages/TestNavigation';
import BackHeader from '@/component/molecule/BackHeader';

export default function Terms() {
  const bridge = useVacBridge();
  
  return <div>
    
    <BackHeader title={"약관동의"} />
    <TestNavigation />
  
  </div>;
}  