import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Colors, fontGenerator } from '@/styles';
import { InputFormType } from '@/component/atom/InputForm/index';
import { CssArchiveType } from '@/types/globalTypes';
import { theme } from '@/styles/theme';

export const InputFormSizes: CssArchiveType = {
  default: css`
    display: inline-flex;
    flex-direction: column;
    position: relative;

    width: 100%;

    & > div.input__content {
      position: relative;
      width: 100%;
      height: 100%;

      & > input.input__content--input {
        width: 100%;
        height: 5.6rem;
        padding: 1.6rem;
      }

      //왼쪽에 아이콘 존재시
      &:has(span.input__content--left__icon) {
        & > input.input__content--input {
          padding-left: 4.6rem;
        }
      }

      //오른쪽에 아이콘 존재시
      &:has(span.input__content--right__icon) {
        & > input.input__content--input {
          padding-right: 4.6rem;
        }
      }

      & > span.common-icon {
        position: absolute;

        &.input__content--left__icon {
          left: 1.6rem;
          width: 2.1rem;
          transform: translate(0%, 70%);
        }

        &.input__content--right__icon {
          right: 1.6rem;
          width: 2.1rem;
          transform: translate(0%, 70%);
        }
      }
    }

    & div.input-form__description {
      margin-top: 1rem;
    }
  `,
  medium: css`
    width: 36rem;
  `,
  small: css``,
  half: css`
    width: 17.8rem;
  `,
};

export const InputFormStyles: CssArchiveType = {
  default: css`
    & > div.input__content {
      & > input.input__content--input {
        ${theme.fonts.body2}
        border: solid 1px ${Colors.Gray200};
        background-color: ${Colors.White};
        color: ${Colors.Gray600};
        border-radius: 8px;

        &:focus {
          background-color: ${Colors.White};
          outline: none;
          color: ${Colors.Black};
          border: solid 0.1rem ${Colors.Primary};
        }

        &::placeholder {
          color: ${Colors.Gray500};
        }

        &:disabled {
          color: ${Colors.Gray600};
          background-color: ${Colors.Gray50};
          border: solid 0.1rem ${Colors.Gray400};
        }
      }
    }

    & div.input-form__description {
      color: ${Colors.Gray900};

      font-size: 0.9rem;
      font-weight: 400;
    }
    & div.input-form__description-top {
      ${fontGenerator('1.6rem', '500', '2.4rem', '-0.4px')}
      color: ${Colors.Gray900};
      margin-bottom: 0.6rem;
    }
  `,
  error: css`
    & > div.input__content {
      & > input.input__content--input {
        border: solid 0.1rem ${Colors.Error};

        &:focus {
          outline: none;
          border: solid 0.1rem ${Colors.Error};
        }
      }

      & > span.common-icon {
        color: ${Colors.Error};
      }
    }

    & div.input-form__description {
      color: ${Colors.Error};
    }
  `,
  search: css`
    & > div.input__content {
      display: flex;
      align-items: center;

      & > input.input__content--input {
        height: 4.4rem;
        padding: 0 1rem 0 2rem;
        border-radius: 1.4rem;
        border: solid 1px rgba(134, 197, 255, 0.2);
        background-color: ${Colors.Gray500};
      }

      & > span.common-icon {
        position: absolute;
        cursor: pointer;

        &.input__content--left__icon {
          left: 2rem;
          transform: translate(0%, 0%);
        }

        &.input__content--right__icon {
          right: 1rem;
          transform: translate(0%, 0%);
        }
      }

      //왼쪽에 아이콘 존재시
      &:has(span.input__content--left__icon) {
        & > input.input__content--input {
          padding-left: 5.4rem;
        }
      }

      //오른쪽에 아이콘 존재시
      &:has(span.input__content--right__icon) {
        & > input.input__content--input {
          padding-right: 4.4rem;
        }
      }
    }

    & div.input-form__description {
      color: ${Colors.Error};
    }
  `,
  white: css`
    & > div.input__content {
      & > input.input__content--input {
        background-color: ${Colors.White};
      }
    }
  `,
  success: css`
    & > div.input__content {
      & > input.input__content--input {
        border: solid 0.1rem ${Colors.Primary};
      }
    }
  `,
  placeHolder: css`
    & > div.input__content {
      & > input.input__content--input {
        border: solid 0.1rem ${Colors.Gray200};
        color: ${Colors.Gray500};
        background-color: ${Colors.Gray50};
      }
    }
  `,
};

export const InputWrapper = styled.div<InputFormType>`
  ${InputFormStyles.default}
  ${InputFormSizes.default}
  ${(props) => props.size && InputFormSizes[props.size]}
  ${(props) => props.variant && InputFormStyles[props.variant]}
  ${(props) => props.customStyle}
`;
