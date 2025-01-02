import * as React from 'react';
import { WelcomePageWrap } from './style';

import { useRouter } from 'next/navigation';
import Button from '@/component/atom/Button/button';
import { useVacBridge } from '@/bridge/VacBridgeProvider';

export default function WelcomePage() {
  const router = useRouter();
  const bridge = useVacBridge();

  return (
    <WelcomePageWrap>
      <div className="container">
        <div className="top">
          <div className="cate">가입 완료</div>
          <div className="title">환영합니다!</div>
          <div className="subTitle">지금 바로, 백곰을 시작해 보세요!</div>
        </div>
        <div className="body">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffedf4cdb87ccc9e401bdf99e8d9219b1160eed52b9582b4cc61008ac4077b04?"
            className="mt-7 w-full aspect-[0.92]"
          />
        </div>
        <div className="bottom">
          <Button
            label={'백곰 시작하기'}
            size={'large'}
            onClick={() => {
              // bridge.routeTo('/home');
            }}
          />
        </div>
      </div>
    </WelcomePageWrap>
  );
}
