import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Colors, fontGenerator } from '@/styles';
import { theme } from '@/styles/theme';

export const BottomButtonContain = styled.header`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
`;
