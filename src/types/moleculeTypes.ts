import React from 'react';

// BackHeader 타입
export interface BackHeaderType {
  title: string;
  url?: string;
  counter?: number;
  color?: 'black' | 'white';
  isIcon?: boolean;
  onClickHandler?: React.MouseEventHandler<HTMLSpanElement>;
}