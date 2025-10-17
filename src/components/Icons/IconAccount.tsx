import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconSVGProps } from '../../interfaces/common';

const IconTakeOff = ({ styles }: IconSVGProps) => {
  return (
    <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    style={styles}
  >
    <Path
      d="M12.3333 12C15.0947 12 17.3333 9.76142 17.3333 7C17.3333 4.23858 15.0947 2 12.3333 2C9.57189 2 7.33331 4.23858 7.33331 7C7.33331 9.76142 9.57189 12 12.3333 12Z"
      stroke="#A4AFBD"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.3333 12C15.0947 12 17.3333 9.76142 17.3333 7C17.3333 4.23858 15.0947 2 12.3333 2C9.57189 2 7.33331 4.23858 7.33331 7C7.33331 9.76142 9.57189 12 12.3333 12Z"
      stroke="black"
      strokeOpacity={0.5}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.9233 22C20.9233 18.13 17.0733 15 12.3333 15C7.59328 15 3.74329 18.13 3.74329 22"
      stroke="#A4AFBD"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.9233 22C20.9233 18.13 17.0733 15 12.3333 15C7.59328 15 3.74329 18.13 3.74329 22"
      stroke="black"
      strokeOpacity={0.5}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  );
};

export default IconTakeOff;
