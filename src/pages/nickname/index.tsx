import * as yup from 'yup';
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
import WarningToastWrap from '@/component/molecule/WorningToastWrap';

export default function Terms() {
  const router = useRouter();
  const bridge = useVacBridge();

  const [nickname, setNickName] = useState<string>('');
  const [error, setError] = useState('');

  // yup 스키마 정의
  const nicknameSchema = yup
    .string()
    .required('닉네임을 입력해주세요.')
    .matches(
      /^[a-zA-Z가-힣0-9]{2,10}$/,
      '닉네임은 2~10자 사이의 영문, 한글, 숫자만 가능합니다.',
    );

  const validateNickname = (nickname: string) => {
    try {
      nicknameSchema.validateSync(nickname); // 유효성 검사
      setError(''); // 에러 초기화
      return true;
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        setError(err.message); // 에러 메시지 설정
      }
      return false;
    }
  };

  return (
    <>
      <BackHeader onClickHandler={bridge.back} />
      <HeadlineTitle>
        돌보미의 닉네임을
        <br /> 입력해주세요
      </HeadlineTitle>
      <InputWrap>
        <InputForm
          placeholder="돌보미의 닉네임을 입력해 주세요"
          value={nickname}
          descriptionTop={'닉네임'}
          type="text"
          onChange={(e) => {
            setNickName(e.target.value);
          }}
        />
        <BottomButtonProvider
          label={'다음'}
          isActive={nickname}
          disabled={!nickname}
          onClick={() => {
            validateNickname(nickname) && router.push(PATH.welcome);
          }}
        />
        <WarningToastWrap errorMessage={error} setErrorMessage={setError} />
      </InputWrap>
    </>
  );
}
