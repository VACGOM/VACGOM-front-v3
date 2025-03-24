import React from 'react';
import { HeaderContainer, Title } from './styles';
import { MainHeaderType } from '../atomType';
import Link from 'next/link';
import { IcoNotification } from '@/assets/svg';

const MainHeader: React.FC<MainHeaderType> = ({ title }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <Link href="/alert">
        <IcoNotification style={{ cursor: 'pointer' }} />
      </Link>
    </HeaderContainer>
  );
};

export default MainHeader;
