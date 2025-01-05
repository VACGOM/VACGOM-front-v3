import React from 'react';
import { Path } from '@/routes/path';
import { useVacBridge } from '@/bridge/VacBridgeProvider';

export const VacLink: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    path: Path;
    children?: React.ReactNode;
  }
> = (props) => {
  const vacBridge = useVacBridge();
  return (
    <a
      {...props}
      onClick={(e) => {
        e.preventDefault();
        vacBridge.routeTo(props.path, {});
      }}
      href={props.path.path}
    >
      {props.children}
    </a>
  );
};
