'use client';
import React from 'react';
import { BottomButtonContain } from './style';
import { useRouter } from 'next/navigation';
import Button from '@/component/atom/button/button';

interface BottomButtonType {
  label: string;
  isActive: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const BottomButtonProvider: React.FC<BottomButtonType> = ({
  label,
  isActive,
  onClick,
  disabled = false,
}) => {
  const router = useRouter();

  return (
    <BottomButtonContain>
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
