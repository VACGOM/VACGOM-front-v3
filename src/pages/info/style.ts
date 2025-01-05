import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const HeadlineTitle = styled.div`
  padding: 2rem 2rem 0.6rem 2rem;
  ${theme.fonts.headline4};
  ${theme.colors.Gray900};
`;

export const InputWrap = styled.div`
  padding: 2rem;
  display: flex;
  gap: 8px;
`;

export const HeadlineSubTitle = styled.div`
  padding: 0 2rem;
  ${theme.fonts.body2};
  color: ${theme.colors.Gray600};
`;

export const BabyInfoWrap = styled.div`
  padding-bottom: 12rem;
`;
