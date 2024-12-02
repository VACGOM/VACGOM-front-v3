import { TestNavigation } from '@/pages/TestNavigation';
import { useAccessToken } from '@/bridge/hooks/useAccessToken';

export default function Home() {
  
  const accessToken = useAccessToken();
  
  console.log('accessToken', accessToken);
  return <div>
    홈
    {accessToken && <div>accessToken: {accessToken}</div>}
    <TestNavigation />
  
  </div>;
}