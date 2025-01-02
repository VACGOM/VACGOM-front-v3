'use client';

import React, { useState } from 'react';

// Styles
import { css } from '@emotion/react';
import { InputWrapper } from './styles';

/**
 * @description Input form 컴포넌트
 * @param {string | undefined} id
 * @param {string | undefined} width
 * @param {React.RefObject<HTMLInputElement> | undefined} inputRef
 * @param {boolean | undefined} readOnly
 * @param {boolean | undefined} disabled
 * @param {string | undefined} placeholder
 * @param {any} value
 * @param {string | undefined} type
 * @param {number | undefined} maxLength
 * @param {((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined} onKeyPress
 * @param {((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined} onKeyDown
 * @param {((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined} onChange
 * @param {((event: React.FocusEvent<HTMLInputElement>) => void) | undefined} onBlur
 * @param {((event: React.MouseEvent<HTMLInputElement>) => void) | undefined} onClick
 * @param {SerializedStyles | undefined} customStyle
 * @param {Omit<React.PropsWithChildren<InputFormType>, "onKeyDown" | "onClick" | "onChange" | "customStyle" | "inputRef" | "onKeyPress" | "readOnly" | "type" | "onBlur" | "width" | "disabled" | "id" | "placeholder" | "value" | "maxLength">} otherProps
 * @return {JSX.Element}
 */

export interface InputFormType {
  id?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  value: any;
  type?: string;
  maxLength?: number;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  description?: string;
  descriptionTop?: string;
  customStyle?: any;
  size?: string;
  variant?: string;
  children?: React.ReactNode;
  autoComplete?: string;
}

const Index = ({
  inputRef,
  readOnly = false,
  disabled = false,
  placeholder = '',
  value,
  type = 'text',
  maxLength = 255,
  onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {},
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {},
  onBlur = (event: React.FocusEvent<HTMLInputElement>) => {},
  onClick = (event: React.MouseEvent<HTMLInputElement>) => {},
  description,
  descriptionTop,
  customStyle = css``,
  size = '',
  variant = '',
  children,
  autoComplete = 'one-time-code',
  leftIcon,
  rightIcon,
}: React.PropsWithChildren<InputFormType>) => {
  const [isInputFilled, setInputFilled] = useState(false);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur(event);
    setInputFilled(event.target.value !== '');
  };

  const variantValue = !isInputFilled ? 'placeHolder' : variant;

  return (
    <InputWrapper
      customStyle={customStyle}
      size={size}
      variant={variantValue}
      disabled={disabled}
    >
      {descriptionTop && (
        <div className="input-form__description-top">{descriptionTop}</div>
      )}
      <div className="input__content">
        {leftIcon && (
          <span className="common-icon input__content--left__icon">
            {leftIcon}
          </span>
        )}
        <input
          className="input__content--input"
          id={id}
          type={type}
          ref={inputRef}
          value={value}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          maxLength={maxLength}
          onKeyDown={onKeyDown}
          onChange={onChange}
          onClick={onClick}
          onBlur={handleBlur}
          autoComplete={autoComplete}
        />
        {rightIcon && (
          <span className="common-icon input__content--right__icon">
            {rightIcon}
          </span>
        )}

        {children}
      </div>
      {description && (
        <div className="input-form__description">{description}</div>
      )}
    </InputWrapper>
  );
};

export default Index;
