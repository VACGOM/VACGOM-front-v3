import { useVacBridge } from '@/bridge/VacBridgeProvider';
import BackHeader from '@/component/molecule/BackHeader';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  BabyInfoWrap,
  HeadlineSubTitle,
  HeadlineTitle,
  InputWrap,
} from '@/pages/info/style';
import BottomButtonProvider from '@/component/molecule/BottomButtonProvider';
import { IcoAddBlue } from '@/assets/svg';
import BabyInfo from '@/component/molecule/BabyInfo';
import { checkParamsFilled, checkParamsListFilled } from '@/utills/useUtil';
import { usePostUsers } from '@/api/users/usePostUsers';
import { PATH } from '@/routes/path';
import useSignupStore from '@/store/signup/babySignup';

export default function Terms() {
  const router = useRouter();
  const bridge = useVacBridge();

  const { setBabies } = useSignupStore((state) => state);

  const [params, setParams] = useState<BabyInfoParamsType[]>([
    {
      id: 1,
      name: '',
      gender: '',
      birthday: '',
      profileImg: '',
    },
  ]);

  const addBabyInfo = () => {
    setParams((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1, // 새로운 ID
        name: '',
        gender: '',
        birthday: '',
        profileImg: '',
      },
    ]);
  };

  const onChangeValue = (id: number, field: string, value: string | File) => {
    setParams((prevState) =>
      prevState.map((baby) =>
        baby.id === id
          ? {
              ...baby,
              [field]: value,
            }
          : baby,
      ),
    );
    console.log(params);
  };

  const { mutate } = usePostUsers();

  return (
    <BabyInfoWrap>
      <BackHeader onClickHandler={bridge.back} />
      <HeadlineTitle>우리 아이 정보를 입력해 주세요</HeadlineTitle>
      <HeadlineSubTitle>입력한 정보는 언제든 수정이 가능해요</HeadlineSubTitle>
      {params.map((body) => (
        <BabyInfo
          key={body.id}
          params={body}
          onChangeValue={(field, value) => onChangeValue(body.id, field, value)}
          onClickDate={() => {
            // 브릿지 연결
          }}
        />
      ))}
      <InputWrap>
        <BottomButtonProvider
          label={'다음'}
          isActive={checkParamsListFilled(params)}
          disabled={!checkParamsListFilled(params)}
          onClick={() => {
            // 다음 페이지
            router.push(PATH.nickname);
            setBabies(params);
          }}
          twoButtonLabel={'아이 추가하기'}
          twoButtonVariant={'BabyAdd'}
          twoButton={true}
          twoButtonPrevIcon={<IcoAddBlue />}
          onTwoButtonClick={addBabyInfo}
        />
      </InputWrap>
    </BabyInfoWrap>
  );
}
