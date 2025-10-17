import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconSVGProps } from '../../interfaces/common';

const IconOrder = ({ styles }: IconSVGProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    style={styles}
  >
    <Path
      d="M17.5883 2H6.41181C5.17729 2 4.17651 3.05345 4.17651 4.35294V19.6471C4.17651 20.9466 5.17729 22 6.41181 22H17.5883C18.8228 22 19.8236 20.9466 19.8236 19.6471V4.35294C19.8236 3.05345 18.8228 2 17.5883 2Z"
      stroke="#535862"
      strokeWidth={1.5}
    />
    <Path
      d="M8.64709 7.88232H15.353M8.64709 12.5882H15.353M8.64709 17.2941H13.1177"
      stroke="#535862"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default IconOrder;
