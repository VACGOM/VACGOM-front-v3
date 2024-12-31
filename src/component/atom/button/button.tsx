'use client';

import React, { MouseEvent } from 'react';
import { css, SerializedStyles } from '@emotion/react';

import { ButtonContent } from './styles';

// typings
export interface ButtonType {
  className?: string;
  customStyle?: SerializedStyles;
  label?: string;
  prevIcon?: React.ReactNode;
  icon?: React.ReactNode;
  iconSize?: string;
  variant?:
    | 'default'
    | 'Primary'
    | 'Secondary'
    | 'OutlineWhite'
    | 'Disabled'
    | 'kakao'
    | 'UnSelect'
    | 'Select'
    | 'BabyAdd';
  size?:
    | 'default'
    | 'small'
    | 'medium'
    | 'large'
    | 'bottombutton'
    | 'modal'
    | 'xsmall'
    | 'kakao'
    | 'refresh';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

/**
 * @description 버튼
 * @param {string | undefined} className
 * @param {SerializedStyles | undefined} customStyle
 * @param {string | undefined} label
 * @param {IconDetailType | undefined} icon
 * @param {string | undefined} variant
 * @param {string | undefined} iconSize
 * @param {((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined} onClick
 * @returns {JSX.Element}
 */

function Button({
  className = '',
  customStyle = css``,
  label = '버튼',
  icon,
  prevIcon,
  variant = 'Primary',
  size = 'medium',
  disabled = false,
  onClick = (e: MouseEvent<HTMLButtonElement>) => {},
}: React.PropsWithChildren<ButtonType>) {
  return (
    <ButtonContent
      className={className}
      customStyle={customStyle}
      variant={variant}
      size={size}
      onClick={onClick}
      icon={icon}
      prevIcon={prevIcon}
      disabled={disabled}
    >
      {prevIcon && prevIcon}
      {label}
      {icon && icon}
    </ButtonContent>
  );
}

export default Button;
