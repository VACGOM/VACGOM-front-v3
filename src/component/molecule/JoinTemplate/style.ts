import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Colors, fontGenerator } from '@/styles';
import { theme } from '@/styles/theme';

export const JoinTemplateContainer = styled.section``;

export const JoinTempTop = styled.div`
  padding: 2rem 0;

  & > .title {
    color: ${theme.colors.Gray800};
    ${theme.fonts.headline4};
  }

  & > .subTop {
    margin-top: 6px;
  }
  & > .subTop,
  .subBottom {
    ${theme.fonts.body2};
    color: ${Colors.Gray600};
  }
`;

export const JoinTempButton = styled.div`
  padding: 2rem 0 1.4rem 0;

  & > .button {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    & > button {
      justify-content: flex-start;
    }
    & > button:hover {
      background-color: ${Colors.PrimaryLight};
      border: none;
    }
  }
  & > .detail {
    display: flex;
    gap: 25px;
    flex-direction: column;
    padding: 10px 20px;
  }
`;
