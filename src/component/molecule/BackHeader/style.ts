import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Colors, fontGenerator } from '@/styles';
import { theme } from '@/styles/theme';

export const HeaderContainer = styled.header`
  display: flex;
  box-sizing: border-box;
    width: 39.3rem;
    height: 5.4rem;
    padding: 1rem 2rem;
    align-items: center;
    flex-shrink: 0;

  & > .counter {
    ${fontGenerator('16px', '400', '26px')}
    color: ${Colors.Gray600};
    margin-right: 7px;
  }
    & > svg {
        width: 2.4rem;
    }
`;

export const Title = styled.h1`
  width: 100%;
  margin-right: 24px;
  text-align: center;
  color: #333d4b;
  ${theme.fonts.title2}
`;
