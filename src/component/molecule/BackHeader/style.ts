import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Colors, fontGenerator } from '@/styles';

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
        width: 2rem;
    }
`;

export const Title = styled.h1`
  width: 100%;
  margin-right: 24px;
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  color: #333d4b;
`;
