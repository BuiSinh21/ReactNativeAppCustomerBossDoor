import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconSVGProps } from '../../interfaces/common';

const IconHome = ({ styles }: IconSVGProps) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    style={styles}
  >
    <Path
      d="M9.77 2.83992L4.38 7.03992C3.48 7.73992 2.75 9.22992 2.75 10.3599V17.7699C2.75 20.0899 4.64 21.9899 6.96 21.9899H18.54C20.86 21.9899 22.75 20.0899 22.75 17.7799V10.4999C22.75 9.28992 21.94 7.73992 20.95 7.04992L14.77 2.71992C13.37 1.73992 11.12 1.78992 9.77 2.83992Z"
      stroke="#535862"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.75 17.99V14.99"
      stroke="#535862"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default IconHome;
