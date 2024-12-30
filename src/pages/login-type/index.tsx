'use client';

import * as React from 'react';
import {
  LoginTypeBody,
  LoginTypeBottom,
  LoginTypePadding,
  LoginTypeTop,
  LoginTypeWrap,
} from './style';
import { css } from '@emotion/react';
import { useRouter } from 'next/navigation';
import { PATH } from '@/routes/path';
import BackHeader from '@/component/molecule/BackHeader';
import Button from '@/component/atom/button/button';
import { useVacBridge } from '@/bridge/VacBridgeProvider';
import { IcoVacFrame1 } from '@/assets/svg';

export default function SignupDone(): React.JSX.Element {
  const router = useRouter();
  const bridge = useVacBridge();

  return (
    <LoginTypeWrap>
      <BackHeader onClickHandler={bridge.back} />
      <LoginTypePadding>
        <LoginTypeTop>
          아이를 등록한 후 <br />
          백곰을 시작해 보세요!
        </LoginTypeTop>
        <LoginTypeBody>
          <IcoVacFrame1 />
        </LoginTypeBody>
        <LoginTypeBottom>
          <Button
            label={'초대 코드로 연결하기'}
            variant={'OutlineWhite'}
            size={'large'}
            customStyle={css`
              width: 100%;
            `}
            onClick={() => {
              router.push(PATH.invite);
            }}
          />
          <Button
            label={'아이 정보 입력하기'}
            size={'large'}
            customStyle={css`
              width: 100%;
            `}
            onClick={() => {
              router.push(PATH.info);
            }}
          />
        </LoginTypeBottom>
      </LoginTypePadding>
    </LoginTypeWrap>
  );
}
