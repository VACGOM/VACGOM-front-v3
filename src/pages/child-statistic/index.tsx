import * as React from 'react';
import { PageWrap } from './style';

import { useRouter } from 'next/navigation';
import Button from '@/component/atom/Button/button';
import { useVacBridge } from '@/bridge/VacBridgeProvider';
import { useState } from 'react';
import VacLookupFixed from '@/component/organism/vaclookupFixed';

export default function ChildStatisticPage() {
  const router = useRouter();
  const bridge = useVacBridge();
  const [selectedSection, setSelectedSection] = useState('필수예방접종');

  return (
    <PageWrap>
      <VacLookupFixed
        selectedSection={selectedSection}
        handleSectionChange={setSelectedSection}
      />
    </PageWrap>
  );
}
