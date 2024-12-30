import { useVacBridge } from '@/bridge/VacBridgeProvider';
import BackHeader from '@/component/molecule/BackHeader';
import JoinTemplate from '@/component/molecule/JoinTemplate';
import { useState } from 'react';
import { OnChangeValueType, ParamsType } from '@/types/globalTypes';
import TermsAllAgree from '@/component/molecule/TermsAllAgree';
import Button from '@/component/atom/button/button';
import { TermsBody } from '@/pages/login/terms/style';
import { TermsContents } from '@/component/molecule/TermsAllAgree/style';
import BottomButtonProvider from '@/component/molecule/BottomButtonProvider';
import { PATH } from '@/routes/path';
import { useRouter } from 'next/navigation';

export default function Terms() {
  const bridge = useVacBridge();
  const router = useRouter();

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
      <BackHeader title={'약관동의'} />
      <TermsBody>
        <JoinTemplate
          title={'서비스 이용을 위해'}
          titleBottom={'이용약관 동의가 필요해요.'}
          subTop={'약관에 동의해야 정상적으로 서비스를 이용할 수 있어요.'}
          oneLabel={'네, 모두 동의합니다.'}
          params={params}
          field={'terms'}
          onChangeValue={onChangeValue}
        />
        <TermsAllAgree selected={params.terms} />
        <BottomButtonProvider
          label={'다음'}
          isActive={params.terms}
          disabled={params.terms}
          onClick={() => {
            router.push(PATH.login_type);
          }}
        />
      </TermsBody>
    </>
  );
}
