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
import BottomButtonProvider from '@/component/molecule/BottomButtonProvider';
import { PATH } from '@/routes/path';
import { IcoAddBlue } from '@/assets/svg';
import BabyInfo from '@/component/molecule/BabyInfo';

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
      <HeadlineSubTitle>초대 코드를 입력해 주세요</HeadlineSubTitle>
      <BabyInfo
        params={params}
        onChangeValue={onChangeValue}
        onClickDate={() => {
          // 브릿지 연결
        }}
      />
      <InputWrap>
        <BottomButtonProvider
          label={'다음'}
          isActive={params.inviteCode}
          disabled={!params.inviteCode}
          onClick={() => {
            // 다음 페이지
          }}
          twoButtonLabel={'아이 추가하기'}
          twoButtonVariant={'BabyAdd'}
          twoButton={true}
          twoButtonPrevIcon={<IcoAddBlue />}
          onTwoButtonClick={() => {
            // 아이 추가 로직
          }}
        />
      </InputWrap>
    </>
  );
}
