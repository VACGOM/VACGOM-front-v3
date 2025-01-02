import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Colors, fontGenerator } from '@/styles';
import { theme } from '@/styles/theme';

export const BabyInfoContainer = styled.header`
  display: flex;
  gap: 1.4rem;
  flex-direction: column;
  border-radius: 14px;
  border: 1px solid ${theme.colors.Gray200};
  background: ${theme.colors.White};
  margin: 2rem;
  padding: 2.4rem;

  box-shadow: 0px 8px 16px 0px rgba(145, 158, 171, 0.16);

  & > .counter {
    ${fontGenerator('16px', '400', '26px')}
    color: ${Colors.Gray600};
    margin-right: 7px;
  }

  & > .profile-upload {
    width: 10rem;
  }
`;

export const BabyInfoValue = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
`;

export const IcoProfileWrap = styled.div`
  position: relative;
  & > .profile-upload {
    width: 10rem;
  }

  & > .profile-edit {
    position: absolute;
    bottom: 0;
    left: 7.5rem;
    width: 3rem;
  }
`;

export const SexSelectWrap = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;
`;

export const Title = styled.h1`
  color: ${theme.colors.Gray800};
  ${theme.fonts.caption1};
`;
