import React from 'react';
import MainHeader from '@/component/atom/MainHeader';
import SectionHeader from '@/component/atom/SectionHeader';
import Information from '@/component/atom/Information';

interface VacLookupFixedProps {
  selectedSection: string;
  handleSectionChange: (section: string) => void;
  messages?: Record<string, string>;
}

const VacLookupFixed: React.FC<VacLookupFixedProps> = ({
  selectedSection,
  handleSectionChange,
  messages,
}) => {
  const sectionTexts = ['주간', '월간', '기간'];

  return (
    <>
      <MainHeader title="육아 통계" />
      <SectionHeader
        sections={sectionTexts}
        onSectionChange={handleSectionChange}
      />
      {messages && (
        <Information
          message={messages[selectedSection]}
          containerProps={{
            background: '#F2F4F6',
            padding: '15px 20px',
            gap: '10px',
            height: '70px',
          }}
          iconProps={{
            color: '#6B7684',
            marginRight: '10px',
          }}
          textProps={{
            fontSize: '12px',
            fontWeight: 500,
            lineHeight: '20px',
            letterSpacing: '-0.03em',
            color: '#6B7684',
          }}
        />
      )}
    </>
  );
};

export default VacLookupFixed;
