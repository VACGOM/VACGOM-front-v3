import { useVacBridge } from '@/bridge/VacBridgeProvider';
import { useEffect, useState } from 'react';

export function useAccessToken() {
  const vacBridge = useVacBridge();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  
  useEffect(() => {
    vacBridge.getAccessToken().then((accessToken) => {
      setAccessToken(accessToken);
    });
  }, [vacBridge]);
  
  return accessToken;
}