import { useVacBridge } from '@/bridge/VacBridgeProvider';
import BackHeader from '@/component/molecule/BackHeader';
import JoinTemplate from '@/component/molecule/JoinTemplate';
import React, { useState } from 'react';
import { OnChangeValueType, ParamsType } from '@/types/globalTypes';
import TermsAllAgree from '@/component/molecule/TermsAllAgree';
import { TermsBody } from '@/pages/login-terms/style';
import BottomButtonProvider from '@/component/molecule/BottomButtonProvider';
import { PATH } from '@/routes/path';
import { useRouter } from 'next/navigation';
import { HeadlineTitle } from '@/pages/invite/style';

export default function Terms() {
  const router = useRouter();
  const bridge = useVacBridge();

  const [params, setParams] = useState<ParamsType>({
    terms: false,
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
    </>
  );
}
