import * as yup from 'yup';
import { useVacBridge } from '@/bridge/VacBridgeProvider';
import BackHeader from '@/component/molecule/BackHeader';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { HeadlineTitle } from '@/pages/invite/style';
import InputForm from '@/component/atom/InputForm';
import BottomButtonProvider from '@/component/molecule/BottomButtonProvider';
import { PATH } from '@/routes/path';
import WarningToastWrap from '@/component/molecule/WorningToastWrap';
import { InputWrap } from '@/pages/info/style';
import { usePostUsers } from '@/api/users/usePostUsers';
import useSignupStore from '@/store/signup/babySignup';

export default function Terms() {
  const router = useRouter();
  const bridge = useVacBridge();

  const [nickname, setNickName] = useState<string>('');
  const [error, setError] = useState('');
  const { babies } = useSignupStore((state) => state);
  console.log(babies);

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

  const { mutate: useSignup } = usePostUsers({
    onSuccess: () => {
      router.push(PATH.welcome);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = () => {
    const transformData = babies.map((baby) => ({
      name: baby.name,
      gender: baby.gender,
      birthday: baby.birthday,
      profileImg: baby.profileImg,
    }));

    useSignup({
      registerToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOm51bGwsInN1YiI6IlJFR0lTVEVSX1RPS0VOIiwiaXNzIjoidmFjZ29tIiwiaWF0IjoxNzM1ODMzMDk2LCJuYmYiOjE3MzU4MzMwOTYsImV4cCI6MTczNTgzMzY5Niwic29jaWFsSWQiOiIzNzc0Mzc1NTE3IiwicHJvdmlkZXIiOiJrYWthbyJ9.BV80hhuHVNxvCnhIgV7hizLwEujY7QsX4pdBQ8Edppo',
      nickname,
      babies: transformData,
    });
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
            validateNickname(nickname) && handleSubmit();
          }}
        />
        <WarningToastWrap errorMessage={error} setErrorMessage={setError} />
      </InputWrap>
    </>
  );
}
