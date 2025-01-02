import React from 'react';
import { ToastContainer, ToastMessage } from './styles';
import Image from 'next/image';
import { IcoWarning } from '@/assets/svg';

interface WarningToastProps {
  message: string;
}

const WarningToast: React.FC<WarningToastProps> = ({ message }) => {
  return (
    <ToastContainer>
      <IcoWarning />
      <ToastMessage>{message}</ToastMessage>
    </ToastContainer>
  );
};

export default WarningToast;
