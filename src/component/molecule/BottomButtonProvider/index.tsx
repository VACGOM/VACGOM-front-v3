'use client';
import React from 'react';
import { BottomButtonContain } from './style';
import { useRouter } from 'next/navigation';
import Button from '@/component/atom/Button/button';

interface BottomButtonType {
  label: string;
  isActive: boolean;
  onClick: () => void;
  disabled?: boolean;
  twoButton?: boolean;
  twoButtonVariant?:
    | 'default'
    | 'Primary'
    | 'Secondary'
    | 'OutlineWhite'
    | 'Disabled'
    | 'kakao'
    | 'UnSelect'
    | 'Select'
    | 'BabyAdd';
  twoButtonLabel?: string;
  twoButtonPrevIcon?: React.ReactNode;
  onTwoButtonClick?: () => void;
}

const BottomButtonProvider: React.FC<BottomButtonType> = ({
  label,
  isActive,
  onClick,
  disabled = false,
  twoButton = false,
  twoButtonVariant = 'secondary',
  twoButtonLabel,
  twoButtonPrevIcon,
  onTwoButtonClick,
}) => {
  const router = useRouter();

  return (
    <BottomButtonContain>
      {twoButton && (
        <Button
          prevIcon={twoButtonPrevIcon}
          label={twoButtonLabel}
          size={'bottombutton'}
          variant={twoButtonVariant}
          onClick={() => {
            if (onTwoButtonClick) {
              onTwoButtonClick();
            }
          }}
        />
      )}
      <Button
        label={label}
        size={'bottombutton'}
        variant={isActive ? 'primary' : 'UnSelect'}
        onClick={() => {
          if (isActive) {
            onClick();
          }
        }}
        disabled={disabled}
      />
    </BottomButtonContain>
  );
};

export default BottomButtonProvider;
