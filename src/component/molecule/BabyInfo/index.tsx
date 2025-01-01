'use client';
import React, { useRef } from 'react';
import {
  BabyInfoContainer,
  BabyInfoValue,
  IcoProfileWrap,
  SexSelectWrap,
  Title,
} from './style';
import { useRouter } from 'next/navigation';
import { IcoCalendar, IcoProfileEdit, IcoProfileNull } from '@/assets/svg';
import InputForm from '@/component/atom/InputForm';
import Button from '@/component/atom/button/button';

export interface BabyInfoType {
  params: BabyInfoParamsType;
  onClickDate?: () => void;
  onChangeValue: (field: string, value: string) => void;
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
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
      // uploadImage(formData);
    }
  };

  const { mutate: uploadImage } = useMutation(
    (formData: FormData) =>
      axios.post('/api/v3/babies/images', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
    {
      onSuccess: (response) => {
        // 서버에서 반환된 이미지 URL로 상태 업데이트
        const uploadedImageUrl = response.data?.imageUrl;
        if (uploadedImageUrl) {
          setProfileImage(uploadedImageUrl);
        }
        alert('이미지가 성공적으로 업로드되었습니다.');
      },
      onError: (error) => {
        console.error(error);
        alert('이미지 업로드에 실패했습니다.');
      },
    },
  );

  const handleProfileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <BabyInfoContainer>
      <IcoProfileWrap
        onClick={() => {
          handleProfileClick();
        }}
      >
        <IcoProfileNull className={'profile-upload'} />
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
            variant={params.sex === 'woman' ? 'Line_Gray_Select' : 'Line_Gray'}
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
