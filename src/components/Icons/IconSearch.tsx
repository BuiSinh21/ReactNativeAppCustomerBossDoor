import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconSVGProps } from '../../interfaces/common';

const IconSearch = ({ styles }: IconSVGProps) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    style={styles}
  >
    <Path
      d="M11.5 20C16.1945 20 20 16.1945 20 11.5C20 6.8055 16.1945 3 11.5 3C6.8055 3 3 6.8055 3 11.5C3 16.1945 6.8055 20 11.5 20Z"
      stroke="#535862"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Path
      d="M14.3285 8.1715C13.9574 7.79963 13.5165 7.50471 13.0311 7.30367C12.5457 7.10264 12.0254 6.99944 11.5 7C10.9746 6.99944 10.4543 7.10264 9.96893 7.30367C9.48354 7.50471 9.04263 7.79963 8.67151 8.1715M17.611 17.611L21.8535 21.8535"
      stroke="#535862"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default IconSearch;
