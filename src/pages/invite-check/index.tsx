import { useVacBridge } from '@/bridge/VacBridgeProvider';
import BackHeader from '@/component/molecule/BackHeader';
import React, { useState } from 'react';
import { OnChangeValueType, ParamsType } from '@/types/globalTypes';
import { useRouter } from 'next/navigation';
import {
  ButtonWrap,
  HeadlineSubTitle,
  HeadlineTitle,
  InputWrap,
} from '@/pages/invite/style';
import InputForm from '@/component/atom/InputForm';
import BottomButtonProvider from '@/component/molecule/BottomButtonProvider';
import { PATH } from '@/routes/path';
import Button from '@/component/atom/Button/button';

export default function Terms() {
  const router = useRouter();
  const bridge = useVacBridge();

  const [params, setParams] = useState<ParamsType>({
    inviteCode: '',
  });

  const onChangeValue: OnChangeValueType = (field, value) => {
    setParams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <>
      <BackHeader onClickHandler={bridge.back} />
      <HeadlineTitle>
        우리 아이 정보를 <br />
        확인해주세요
      </HeadlineTitle>
      <ButtonWrap>
        <Button
          label={'우리 아이가 아니에요'}
          size={'large'}
          variant={'OutlineWhite'}
          onClick={() => {}}
        />
        <Button label={'등록하기'} size={'large'} onClick={() => {}} />
      </ButtonWrap>
    </>
  );
}
