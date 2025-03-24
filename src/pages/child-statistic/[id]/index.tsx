import * as React from 'react';
import { PageWrap } from './style';

import { useRouter } from 'next/navigation';
import Button from '@/component/atom/Button/button';
import { useVacBridge } from '@/bridge/VacBridgeProvider';

export default function ChildStatisticDetailPage() {
  const router = useRouter();
  const bridge = useVacBridge();

  return <PageWrap></PageWrap>;
}
