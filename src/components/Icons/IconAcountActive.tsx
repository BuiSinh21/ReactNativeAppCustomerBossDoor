import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconSVGProps } from '../../interfaces/common';

const IconTakeOffActive = ({ styles }: IconSVGProps) => {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      style={styles}
    >
      <Path
        d="M12.3335 2.5C14.8188 2.5 16.8335 4.51472 16.8335 7C16.8335 9.48528 14.8188 11.5 12.3335 11.5C9.84821 11.5 7.8335 9.48528 7.8335 7C7.8335 4.51472 9.84821 2.5 12.3335 2.5Z"
        fill="#3683F7"
        stroke="#3683F7"
      />
      <Path
        d="M12.3334 14.5C7.32341 14.5 3.24341 17.86 3.24341 22C3.24341 22.28 3.46341 22.5 3.74341 22.5H20.9234C21.2034 22.5 21.4234 22.28 21.4234 22C21.4234 17.86 17.3434 14.5 12.3334 14.5Z"
        fill="#3683F7"
      />
    </Svg>
  );
};

export default IconTakeOffActive;
