import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcoChevron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 7L15 12L10 17"
      stroke="#B0B8C1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcoChevron;
