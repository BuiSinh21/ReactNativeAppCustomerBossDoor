import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconSVGProps } from "../../interfaces/common";
const SVGComponent = ({ styles }: IconSVGProps) => (
  <Svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    style={styles}
  >
    <Path
      d="M4.0635 12L8.817 7.24C9.14407 6.91139 9.32768 6.46663 9.32768 6.003C9.32768 5.53937 9.14407 5.09461 8.817 4.766L4.058 0L3 1.0605L7.759 5.826C7.80587 5.87288 7.8322 5.93646 7.8322 6.00275C7.8322 6.06904 7.80587 6.13262 7.759 6.1795L3.005 10.9395L4.0635 12Z"
      fill="#444A55"
    />
  </Svg>
);
export default SVGComponent;