'use client';
import React from 'react';
import {
  BabyInfoContainer,
  BabyInfoValue,
  ProfileUpLoadValue,
  SexSelectWrap,
  Title,
} from './style';
import { useRouter } from 'next/navigation';
import { IcoArrowLeft, IcoCalendar, IcoProfieUpload } from '@/assets/svg';
import InputForm from '@/component/atom/InputForm';
import Index from '@/component/atom/InputForm';
import Button from '@/component/atom/button/button';

export interface BackHeaderType {
  params: {
    inviteCode: string;
    babyName: string;
    sex: string;
    birthday: string;
  };
  onClickDate?: () => void;
  onChangeValue: (field: string, value: string) => void;
}

const BabyInfo: React.FC<BackHeaderType> = ({
  params,
  onClickDate,
  onChangeValue,
}) => {
  const router = useRouter();

  return (
    <BabyInfoContainer>
      <IcoProfieUpload
        className={'profile-upload'}
        onClick={() => {
          // 이미지
          // 업로드
        }}
      />
      <InputForm
        placeholder="아이의 이름을 입력해주세요"
        value={params.babyName}
        descriptionTop={'이름'}
        type="text"
        onChange={(e) => {
          onChangeValue('babyName', e.target.value);
        }}
      />
      <BabyInfoValue>
        <Title>성별</Title>
        <SexSelectWrap>
          <Button
            label={'남자아이'}
            variant={'Line_Gray'}
            size={'large'}
            onClick={() => onChangeValue('sex', 'man')}
          />
          <Button
            label={'여자아이'}
            variant={'Line_Gray'}
            size={'large'}
            onClick={() => onChangeValue('sex', 'woman')}
          />
        </SexSelectWrap>
      </BabyInfoValue>
      <BabyInfoValue>
        <InputForm
          placeholder="생년월일"
          value={params.birthday}
          descriptionTop={'생년월일'}
          type="text"
          onChange={(e) => {
            onChangeValue('생년월일', e.target.value);
          }}
          readOnly={true}
          variant={'white'}
          leftIcon={<IcoCalendar />}
        />
      </BabyInfoValue>
    </BabyInfoContainer>
  );
};

export default BabyInfo;
