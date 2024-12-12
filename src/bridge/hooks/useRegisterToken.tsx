import { useVacBridge } from '@/bridge/VacBridgeProvider';
import { useEffect, useState } from 'react';

export function useRegisterToken() {
  const vacBridge = useVacBridge();
  const [registerToken, setRegisterToken] = useState<string | null>(null);
  
  useEffect(() => {
    vacBridge.getRegisterToken().then((registerToken) => {
      setRegisterToken(registerToken);
    });
  }, [vacBridge]);
  
  return registerToken;
}