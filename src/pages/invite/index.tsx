import { useVacBridge } from '@/bridge/VacBridgeProvider';
import BackHeader from '@/component/molecule/BackHeader';
import React, { useState } from 'react';
import { OnChangeValueType, ParamsType } from '@/types/globalTypes';
import { useRouter } from 'next/navigation';
import {
  HeadlineSubTitle,
  HeadlineTitle,
  InputWrap,
} from '@/pages/invite/style';
import InputForm from '@/component/atom/InputForm';
import BottomButtonProvider from '@/component/molecule/BottomButtonProvider';
import { PATH } from '@/routes/path';

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
      <HeadlineTitle>초대 코드를 입력해 주세요</HeadlineTitle>
      <InputWrap>
        <InputForm
          placeholder="코드를 입력해 주세요"
          value={params.inviteCode}
          descriptionTop={'초대 코드'}
          type="text"
          onChange={(e) => {
            onChangeValue('inviteCode', e.target.value);
          }}
        />
        <BottomButtonProvider
          label={'다음'}
          isActive={params.inviteCode}
          disabled={!params.inviteCode}
          onClick={() => {
            router.push(PATH.invite_confirm);
          }}
        />
      </InputWrap>
    </>
  );
}
