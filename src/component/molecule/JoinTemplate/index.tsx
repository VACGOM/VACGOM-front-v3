'use client';
import React from 'react';
import { JoinTempButton, JoinTemplateContainer, JoinTempTop } from './style';
import { Icons } from '@/styles';
import Button from '@/component/atom/Button/button';
import { OnChangeValueType, ParamsType } from '@/types/globalTypes';
import {
  IcoCheckboxSelectedEnabled,
  IcoCheckboxUnselectedEnabled,
} from '@/assets/svg';
import { css } from '@emotion/react';

type props = {
  title: string;
  titleBottom?: string;
  subTop?: string;
  subBottom?: string;
  falseLabel?: string;
  trueLabel?: string;
  oneLabel?: string;
  params: ParamsType;
  field: string;
  onChangeValue: OnChangeValueType;
};
const JoinTemplate: React.FC<props> = ({
  params,
  title,
  titleBottom,
  subTop,
  subBottom,
  falseLabel,
  trueLabel,
  oneLabel,
  field,
  onChangeValue,
}) => {
  const renderPrevIcon = (isSelected: boolean) => {
    return isSelected ? (
      <IcoCheckboxSelectedEnabled />
    ) : (
      <IcoCheckboxUnselectedEnabled />
    );
  };

  return (
    <JoinTemplateContainer>
      <JoinTempTop>
        <div className={'title'}>{title}</div>
        <div className={'title'}>{titleBottom}</div>
        {subTop && <div className={'subTop'}>{subTop}</div>}
        <div className={'subBottom'}>{subBottom}</div>
      </JoinTempTop>
      <JoinTempButton>
        {oneLabel && (
          <Button
            label={oneLabel}
            prevIcon={renderPrevIcon(params[field] === true)}
            onClick={() => {
              if (params[field] === true) onChangeValue(field, false);
              else onChangeValue(field, true);
            }}
            variant={params[field] ? 'Select' : 'OutlineWhite'}
            size={'large'}
            customStyle={css`
              justify-content: flex-start;
            `}
          />
        )}
      </JoinTempButton>
    </JoinTemplateContainer>
  );
};

export default JoinTemplate;
