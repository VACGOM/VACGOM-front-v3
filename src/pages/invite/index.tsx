import { useVacBridge } from '@/bridge/VacBridgeProvider';
import BackHeader from '@/component/molecule/BackHeader';
import React, { useState } from 'react';
import { OnChangeValueType, ParamsType } from '@/types/globalTypes';
import { useRouter } from 'next/navigation';
import { HeadlineTitle, InputWrap } from '@/pages/invite/style';
import InputForm from '@/component/atom/InputForm';
import BottomButtonProvider from '@/component/molecule/BottomButtonProvider';
import { PATH } from '@/routes/path';
import { usePostUsersInvitation } from '@/api/users/usePostUsersInvitation';

export default function Terms() {
  const router = useRouter();
  const bridge = useVacBridge();
  const [inviteCode, setInviteCode] = useState<string>('');
  const { mutate: useSignupInvite } = usePostUsersInvitation();

  const handleSubmit = () => {
    useSignupInvite(
      {
        registerToken: '',
        nickname: '',
        babyIds: [inviteCode],
      },
      {
        onSuccess: () => {
          router.push(PATH.invite_confirm);
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  };

  return (
    <>
      <BackHeader onClickHandler={bridge.back} />
      <HeadlineTitle>초대 코드를 입력해 주세요</HeadlineTitle>
      <InputWrap>
        <InputForm
          placeholder="코드를 입력해 주세요"
          value={inviteCode}
          descriptionTop={'초대 코드'}
          type="text"
          onChange={(e) => {
            setInviteCode(e.target.value);
          }}
        />
        <BottomButtonProvider
          label={'다음'}
          isActive={inviteCode}
          disabled={!inviteCode}
          onClick={handleSubmit}
        />
      </InputWrap>
    </>
  );
}
