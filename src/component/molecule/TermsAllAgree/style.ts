import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Colors, fontGenerator } from '@/styles';
import { theme } from '@/styles/theme';

export const TermsDetailContainer = styled.section``;

export const TemrsDetail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0px;
  align-items: center;
  gap: 0.6rem;
  & > svg {
    width: 24px;
  }
`;

export const TermsContents = styled.div`
  ${theme.fonts.body3};
  color: ${theme.colors.Gray600};
  width: 100%;
`;
