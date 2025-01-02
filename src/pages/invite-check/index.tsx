import React from 'react';
import { PATH } from '@/routes/path';
import { useVacBridge } from '@/bridge/VacBridgeProvider';
import { useRouter } from 'next/navigation';
import BackHeader from '@/component/molecule/BackHeader';
import { ButtonWrap, HeadlineTitle } from '@/pages/invite/style';
import Button from '@/component/atom/Button/button';
import BabyCheck from '@/component/molecule/BabyCheck';

export default function InviteCheck() {
  const bridge = useVacBridge();
  const router = useRouter();

  return (
    <>
      <BackHeader onClickHandler={bridge.back} />
      <HeadlineTitle>
        우리 아이 정보를 <br />
        확인해주세요
      </HeadlineTitle>
      <BabyCheck />
      <ButtonWrap>
        <Button
          label={'우리 아이가 아니에요'}
          size={'large'}
          variant={'OutlineWhite'}
          onClick={bridge.back}
        />
        <Button
          label={'등록하기'}
          size={'large'}
          onClick={() => {
            router.push(PATH.nickname);
          }}
        />
      </ButtonWrap>
    </>
  );
}
