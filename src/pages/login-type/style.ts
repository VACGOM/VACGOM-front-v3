import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Colors, flexCssGenerator, fontGenerator } from '@/styles';
import { theme } from '@/styles/theme';
import * as React from 'react';

export const LoginTypeWrap = styled.section``;

export const LoginTypePadding = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  height: calc(100vh - 6rem);
`;

export const LoginTypeTop = styled.div`
  ${theme.fonts.headline3};
  color: ${Colors.Gray900};
  width: 100%;
  text-align: center;
  padding: 5rem 3rem;
  align-self: start;
`;

export const LoginTypeBody = styled.div`
  align-self: center;
  margin: 1rem -2rem;
  & > svg {
    width: 100%;
  }
`;
export const LoginTypeBottom = styled.div`
  align-self: end;
  ${flexCssGenerator('flex', 'center', 'center', 'column')};
  gap: 1rem;
`;
