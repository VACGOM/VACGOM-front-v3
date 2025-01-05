import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Colors, flexCssGenerator, fontGenerator } from '@/styles';
import { theme } from '@/styles/theme';

export const HeadlineTitle = styled.div`
  padding: 2rem 2rem 0.6rem 2rem;
  ${theme.fonts.headline4};
  ${theme.colors.Gray900};
`;

export const ButtonWrap = styled.div`
  padding: 2rem;
  ${flexCssGenerator('flex', 'center', 'center', 'row')};
  display: flex;
  gap: 8px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

export const InputWrap = styled.div`
  padding: 2rem;
  display: flex;
  gap: 8px;
`;
