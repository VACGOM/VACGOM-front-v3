'use client';
import React, { useState } from 'react';
import { TemrsDetail, TermsContents, TermsDetailContainer } from './style';

import Link from 'next/link';
import { IcoCheckBlue, IcoCheckGray, IcoChevron } from '@/assets/svg';
type props = { selected: boolean };
const TermsAllAgree: React.FC<props> = ({ selected = false }: props) => {
  return (
    <TermsDetailContainer>
      <div className="div">
        <Link
          className="div-2"
          href={
            'https://been2spring.notion.site/143ea9e50cd9471a856fd1ce52e47ed3'
          }
        >
          <TemrsDetail>
            {selected ? <IcoCheckBlue /> : <IcoCheckGray />}

            <TermsContents>
              [필수] 백곰 개인정보 수집 및 활용 동의
            </TermsContents>
            <IcoChevron />
          </TemrsDetail>
        </Link>
        <Link
          className="div-3"
          href={
            'https://been2spring.notion.site/cb723ed5c4dc45a183964c9ff056cd2c'
          }
        >
          <TemrsDetail>
            {selected ? <IcoCheckBlue /> : <IcoCheckGray />}
            <TermsContents>[필수] 예방접종도우미 이용약관</TermsContents>
            <IcoChevron />
          </TemrsDetail>
        </Link>
        <Link
          className="div-4"
          href={
            'https://been2spring.notion.site/4c407e7fa55c4866827b7b2301169e57'
          }
        >
          <TemrsDetail>
            {selected ? <IcoCheckBlue /> : <IcoCheckGray />}
            <TermsContents>
              [필수] 예방접종도우미 개인정보 수집 및 이용
            </TermsContents>
            <IcoChevron />
          </TemrsDetail>
        </Link>
      </div>
    </TermsDetailContainer>
  );
};

export default TermsAllAgree;
