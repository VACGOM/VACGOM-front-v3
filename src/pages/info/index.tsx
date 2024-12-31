import { useVacBridge } from '@/bridge/VacBridgeProvider';
import BackHeader from '@/component/molecule/BackHeader';
import React, { useState } from 'react';
import { OnChangeValueType, ParamsType } from '@/types/globalTypes';
import { useRouter } from 'next/navigation';
import { HeadlineTitle, InputWrap } from '@/pages/invite/style';
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
      <HeadlineTitle>우리 아이 정보를 입력해 주세요</HeadlineTitle>
      <InputWrap>
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
