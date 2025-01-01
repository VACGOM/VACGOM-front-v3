import { useVacBridge } from '@/bridge/VacBridgeProvider';
import BackHeader from '@/component/molecule/BackHeader';
import React, { useState } from 'react';
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

  const [params, setParams] = useState<BabyInfoParamsType[]>([
    {
      id: 1,
      inviteCode: '',
      babyName: '',
      sex: '',
      birthday: '',
      profileImage: null,
    },
  ]);

  const addBabyInfo = () => {
    setParams((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1, // 새로운 ID
        inviteCode: '',
        babyName: '',
        sex: '',
        birthday: '',
        profileImage: null, // 새 이미지 필드
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
  };

  return (
    <>
      <BackHeader onClickHandler={bridge.back} />
      <HeadlineTitle>우리 아이 정보를 입력해 주세요</HeadlineTitle>
      <HeadlineSubTitle>초대 코드를 입력해 주세요</HeadlineSubTitle>
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
          isActive={params.inviteCode}
          disabled={!params.inviteCode}
          onClick={() => {
            // 다음 페이지
          }}
          twoButtonLabel={'아이 추가하기'}
          twoButtonVariant={'BabyAdd'}
          twoButton={true}
          twoButtonPrevIcon={<IcoAddBlue />}
          onTwoButtonClick={addBabyInfo}
        />
      </InputWrap>
    </>
  );
}
