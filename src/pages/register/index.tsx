import { useVacBridge } from '@/bridge/VacBridgeProvider';
import { TestNavigation } from '@/pages/TestNavigation';
import { useRegisterToken } from '@/bridge/hooks/useRegisterToken';

export default function Register() {
  const bridge = useVacBridge();
  
  const registerToken = useRegisterToken();
  return <div>
    테스트
    {registerToken}
    
    <TestNavigation />
  
  </div>;
}  