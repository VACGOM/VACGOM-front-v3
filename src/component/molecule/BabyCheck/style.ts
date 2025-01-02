import styled from '@emotion/styled';
import { flexCssGenerator } from '@/styles';
import { theme } from '@/styles/theme';

export const BabyCheckContainer = styled.header`
  ${flexCssGenerator('flex', 'flex-start', 'center', 'row')};
  gap: 1.8rem;
  border-radius: 14px;
  border: 1px solid ${theme.colors.Gray200};
  background: ${theme.colors.White};

  padding: 2rem;
  margin: 2rem;
  & > .babyImage {
    width: 5rem;
    height: 5rem;
  }
`;

export const InfoWrap = styled.div`
  ${flexCssGenerator('flex', '', '', 'column')};
  gap: 1px;
`;

export const BabyTop = styled.div`
  ${flexCssGenerator('flex', 'flex-start', 'center', 'row')};
  gap: 1rem;
`;

export const BabyBottom = styled.div`
  ${flexCssGenerator('flex', 'flex-start', 'flex-start', 'column')};
  ${theme.fonts.body3};
  color: ${theme.colors.Gray500};
`;

export const BabyName = styled.div`
  ${theme.fonts.headline4};
  color: ${theme.colors.Gray800};
`;

export const BabyType = styled.div`
  ${theme.fonts.body3};
  color: ${theme.colors.Primary};
`;
