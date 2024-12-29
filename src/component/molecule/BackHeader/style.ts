import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Colors, fontGenerator } from '@/styles';
import { theme } from '@/styles/theme';

export const HeaderContainer = styled.header`
  display: grid;
    grid-template-columns: auto 1fr 24px;
    align-items: center;
    justify-content: center;

    width: 39.3rem;
  height: 5.4rem;
  padding: 1rem 2rem;


  & > .counter {
    ${fontGenerator('16px', '400', '26px')}
    color: ${Colors.Gray600};
    margin-right: 7px;
  }
    & > svg {
        width: 2.4rem;
        justify-self: start;
    }
`;

export const Title = styled.h1`
  //width: 100%;
  //margin-right: 24px;
    height: fit-content;
  text-align: center;
  color: #333d4b;
  ${theme.fonts.title2}
`;
