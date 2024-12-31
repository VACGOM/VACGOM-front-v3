import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Colors, fontGenerator } from '@/styles';
import { theme } from '@/styles/theme';

export const HeadlineTitle = styled.div`
  padding: 2rem;
  ${theme.fonts.headline4};
  ${theme.colors.Gray900};
`;

export const InputWrap = styled.div`
  padding: 2rem;
  display: flex;
  gap: 8px;
`;
