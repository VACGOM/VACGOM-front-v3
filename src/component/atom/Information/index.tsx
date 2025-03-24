import React from 'react';
import { InformationContainer, Text } from './styles';
import { IcoInfoCheck } from '@/assets/svg';

interface InformationProps {
  message: string | React.ReactNode;
  containerProps?: React.CSSProperties;
  iconProps?: React.CSSProperties;
  textProps?: React.CSSProperties;
}

const Information: React.FC<InformationProps> = ({
  message,
  containerProps = {},
  iconProps = {},
  textProps = {},
}) => {
  return (
    <InformationContainer style={containerProps}>
      <IcoInfoCheck style={{ marginRight: '10px', ...iconProps }} />
      <Text style={textProps}>{message}</Text>
    </InformationContainer>
  );
};

export default Information;
