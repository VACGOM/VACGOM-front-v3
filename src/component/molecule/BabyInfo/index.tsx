'use client';
import React, { useRef, useState } from 'react';
import {
  BabyInfoContainer,
  BabyInfoValue,
  IcoProfileWrap,
  SexSelectWrap,
  Title,
} from './style';
import { useRouter } from 'next/navigation';
import {
  IcoCalendar,
  IcoCircleXFilled,
  IcoProfileEdit,
  IcoProfileNull,
} from '@/assets/svg';
import InputForm from '@/component/atom/InputForm';
import Button from '@/component/atom/Button/button';
import { useBabiesImages } from '@/api/babies/usePostBabyImages';
import Image from 'next/image';

export interface BabyInfoType {
  params: BabyInfoParamsType;
  onClickDate?: () => void;
  onChangeValue: (field: string, value: string | File) => void;
}

const BabyInfo: React.FC<BabyInfoType> = ({
  params,
  onClickDate,
  onChangeValue,
}) => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setProfileImage(URL.createObjectURL(file));

    if (file) {
      const formData = new FormData();
      formData.append('images', file);

      // FormData 확인
      for (let [key, value] of formData.entries()) {
        console.log(`FormData Key: ${key}, Value:`, value);
      }

      uploadImage(formData);
    }
  };

  const handleProfileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const { mutate: uploadImage } = useBabiesImages({
    onSuccess: (response) => {
      const uploadedImageUrl = response.data[0].imageUrl;
      console.log('uploadedImageUrl', uploadedImageUrl);
      onChangeValue('profileImg', uploadedImageUrl);
      alert('이미지가 성공적으로 업로드되었습니다.');
    },
    onError: (error) => {
      console.error(error);
      alert('이미지 업로드에 실패했습니다.');
    },
  });

  return (
    <BabyInfoContainer>
      <IcoProfileWrap
        onClick={() => {
          handleProfileClick();
        }}
      >
        {profileImage ? (
          // 업로드된 이미지 표시
          <Image
            src={profileImage}
            alt="Profile"
            width={100} // 원하는 너비
            height={100} // 원하는 높이
            className="profile-upload"
            style={{ borderRadius: '50%' }}
          />
        ) : (
          // 기본 프로필 아이콘
          <IcoProfileNull className={'profile-upload'} />
        )}
        <IcoProfileEdit className={'profile-edit'} />
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleFileChange}
        />
      </IcoProfileWrap>
      <InputForm
        placeholder="아이의 이름을 입력해주세요"
        value={params.name}
        descriptionTop={'이름'}
        rightIcon={params.name ? <IcoCircleXFilled /> : null}
        onClickRightIcon={() => onChangeValue('name', '')}
        type="text"
        onChange={(e) => {
          onChangeValue('name', e.target.value);
        }}
      />
      <BabyInfoValue>
        <Title>성별</Title>
        <SexSelectWrap>
          <Button
            label={'남자아이'}
            variant={params.gender === 'man' ? 'Line_Gray_Select' : 'Line_Gray'}
            size={'large'}
            onClick={() => onChangeValue('gender', 'man')}
          />
          <Button
            label={'여자아이'}
            variant={
              params.gender === 'woman' ? 'Line_Gray_Select' : 'Line_Gray'
            }
            size={'large'}
            onClick={() => onChangeValue('gender', 'woman')}
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
            onChangeValue('birthday', e.target.value);
          }}
          // readOnly={true}
          variant={'white'}
          leftIcon={<IcoCalendar />}
        />
      </BabyInfoValue>
    </BabyInfoContainer>
  );
};

export default BabyInfo;
