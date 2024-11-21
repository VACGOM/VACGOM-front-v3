import { useVacBridge } from '@/bridge/VacBridgeProvider';
import { TestNavigation } from '@/pages/TestNavigation';

export default function Test() {
  const bridge = useVacBridge();
  
  return <div>
    테스트
    
    <TestNavigation />
  
  </div>;
}  