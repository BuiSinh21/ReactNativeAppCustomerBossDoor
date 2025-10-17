import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";
const SVGComponent = ({ style }: { style?: StyleProp<ViewStyle> }) => (
  <Svg

    width={24}
    height={20}
    viewBox="0 0 24 20"
    fill="none"
    style={style}
  >
    <Path
      d="M2.4 20C1.74 20 1.1752 19.7554 0.7056 19.2662C0.236 18.7771 0.0008 18.1883 0 17.5V2.5C0 1.8125 0.2352 1.22417 0.7056 0.735C1.176 0.245833 1.7408 0.000833333 2.4 0H21.6C22.26 0 22.8252 0.245 23.2956 0.735C23.766 1.225 24.0008 1.81333 24 2.5V17.5C24 18.1875 23.7652 18.7762 23.2956 19.2662C22.826 19.7562 22.2608 20.0008 21.6 20H2.4ZM12 11.25L21.6 5V2.5L12 8.75L2.4 2.5V5L12 11.25Z"
      fill="#3683F7"
    />
  </Svg>
);
export default SVGComponent;
