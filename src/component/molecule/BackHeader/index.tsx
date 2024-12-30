'use client';
import React from 'react';
import { HeaderContainer, Title } from './style';
import { useRouter } from 'next/navigation';
import { IcoArrowLeft } from '@/assets/svg';

export interface BackHeaderType {
  title?: string;
  url?: string;
  counter?: number;
  color?: 'black' | 'white';
  isIcon?: boolean;
  onClickHandler?: React.MouseEventHandler<HTMLSpanElement>;
}

const BackHeader: React.FC<BackHeaderType> = ({
  title,
  url,
  counter,
  onClickHandler,
  isIcon = true,
}) => {
  const router = useRouter();

  return (
    <HeaderContainer>
      {isIcon && (
        <IcoArrowLeft
          onChange={() => {
            if (url != null) {
              router.push(url);
            }
            if (onClickHandler) {
              onClickHandler();
            }
          }}
        />
      )}

      <Title>{title}</Title>
      {counter && <div className={'counter'}>{counter}/5</div>}
    </HeaderContainer>
  );
};

export default BackHeader;
