import { PATH } from '@/routes/path';
import { useVacBridge } from '@/bridge/VacBridgeProvider';

export function TestNavigation() {
  const bridge = useVacBridge();
  
  return <div>
    <button onClick={() => {
      bridge.routeTo(PATH.NOTION_TERMS, { popup: true });
    }}>노션 (외부 사이트)
    </button>
    
    <button onClick={() => {
      bridge.routeTo(PATH.HOME, { replace: true });
    }}>홈 (웹뷰, replace: true)
    </button>
    
    <button onClick={() => {
      bridge.routeTo(PATH.root, { replace: false });
    }}>루트 (웹뷰, replace: false)
    </button>
  
  </div>;
}