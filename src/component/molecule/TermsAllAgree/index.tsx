'use client';
import React from 'react';
import { TemrsDetail, TermsContents, TermsDetailContainer } from './style';
import { IcoCheckBlue, IcoCheckGray, IcoChevron } from '@/assets/svg';
import { VacLink } from '@/bridge/VacLink';
import { webviewPATH } from '@/routes/path';

type props = { selected: boolean };
const TermsAllAgree: React.FC<props> = ({ selected = false }: props) => {
  return (
    <TermsDetailContainer>
      <div className="div">
        <VacLink className="div-2" path={webviewPATH.NOTION_TERMS}>
          <TemrsDetail>
            {selected ? <IcoCheckBlue /> : <IcoCheckGray />}

            <TermsContents>
              [필수] 백곰 개인정보 수집 및 활용 동의
            </TermsContents>
            <IcoChevron />
          </TemrsDetail>
        </VacLink>
        <VacLink className="div-3" path={webviewPATH.NOTION_TERMS}>
          <TemrsDetail>
            {selected ? <IcoCheckBlue /> : <IcoCheckGray />}
            <TermsContents>[필수] 예방접종도우미 이용약관</TermsContents>
            <IcoChevron />
          </TemrsDetail>
        </VacLink>
        <VacLink className="div-4" path={webviewPATH.NOTION_TERMS}>
          <TemrsDetail>
            {selected ? <IcoCheckBlue /> : <IcoCheckGray />}
            <TermsContents>
              [필수] 예방접종도우미 개인정보 수집 및 이용
            </TermsContents>
            <IcoChevron />
          </TemrsDetail>
        </VacLink>
      </div>
    </TermsDetailContainer>
  );
};

export default TermsAllAgree;
