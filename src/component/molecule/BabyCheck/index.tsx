import React from 'react';
import { IcoProfileNull } from '@/assets/svg';
import {
  BabyBottom,
  BabyCheckContainer,
  BabyName,
  BabyTop,
  BabyType,
  InfoWrap,
} from '@/component/molecule/BabyCheck/style';
import { components } from '@/types/type';
import Image from 'next/image';

export interface BabyCheckType {
  data?: components['schemas']['BabyDto.Response.Detail'];
}

const BabyCheck: React.FC<BabyCheckType> = ({ data }) => {
  return (
    <BabyCheckContainer>
      {data?.profileImg ? (
        <Image src={data?.profileImg} alt={'아기 이미지'} />
      ) : (
        <IcoProfileNull className={'babyImage'} />
      )}
      <InfoWrap>
        <BabyTop>
          <BabyName>{data?.name || '백곰이'}</BabyName>
          <BabyType>{data?.gender === 'MALE' ? '왕자님' : '공주님'}</BabyType>
        </BabyTop>
        <BabyBottom>{data?.birthday || '2020.09.25'}</BabyBottom>
      </InfoWrap>
    </BabyCheckContainer>
  );
};

export default BabyCheck;
