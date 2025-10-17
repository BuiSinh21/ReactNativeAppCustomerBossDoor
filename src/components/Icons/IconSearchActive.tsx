import * as React from 'react';
import Svg, { G, Mask, Path } from 'react-native-svg';
import { IconSVGProps } from '../../interfaces/common';

const IconSearchActive = ({ styles }: IconSVGProps) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    style={styles}
  >
    <Mask
      id="mask0_312_5624"
      style={{
        maskType: "luminance",
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={1}
      width={22}
      height={21}
    >
      <Path
        d="M10.75 19C15.4445 19 19.25 15.1945 19.25 10.5C19.25 5.8055 15.4445 2 10.75 2C6.0555 2 2.25 5.8055 2.25 10.5C2.25 15.1945 6.0555 19 10.75 19Z"
        fill="white"
        stroke="white"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M13.5785 7.1715C13.2074 6.79963 12.7665 6.50471 12.2811 6.30367C11.7957 6.10264 11.2754 5.99944 10.75 6C10.2246 5.99944 9.70432 6.10264 9.21893 6.30367C8.73354 6.50471 8.29263 6.79963 7.92151 7.1715"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.861 16.6111L21.1035 20.8536"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Mask>
    <G mask="url(#mask0_312_5624)">
      <Path d="M0.25 0H24.25V24H0.25V0Z" fill="#3683F7" />
    </G>
  </Svg>
);
export default IconSearchActive;
