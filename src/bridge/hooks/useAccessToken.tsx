import { useVacBridge } from '@/bridge/VacBridgeProvider';
import { useState } from 'react';

export function useAccessToken() {
  const vacBridge = useVacBridge();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  
  return accessToken;
}