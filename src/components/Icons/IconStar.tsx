import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { IconSVGProps } from "../../interfaces/common";
const SVGComponent = ({ styles, choose }: { styles?: IconSVGProps, choose?: boolean }) => (
    <Svg
        width={30}
        height={28}
        viewBox="0 0 30 28"
        fill="none"
        style={styles}
    >
        <Path
            d="M13.1441 1.62176C13.8159 -0.0511765 16.1841 -0.0511782 16.8559 1.62176L19.1874 7.42747C19.4734 8.13987 20.1421 8.62565 20.908 8.67759L27.15 9.10083C28.9487 9.22279 29.6805 11.4752 28.297 12.631L23.4959 16.6424C22.9068 17.1346 22.6514 17.9206 22.8387 18.6652L24.3651 24.7324C24.8049 26.4807 22.8889 27.8728 21.3621 26.9142L16.0634 23.5877C15.4132 23.1795 14.5868 23.1795 13.9366 23.5877L8.63793 26.9142C7.11109 27.8728 5.19511 26.4807 5.63494 24.7324L7.1613 18.6652C7.3486 17.9206 7.09321 17.1346 6.50407 16.6424L1.70296 12.631C0.319503 11.4752 1.05134 9.22279 2.85 9.10083L9.092 8.67759C9.85794 8.62565 10.5266 8.13987 10.8126 7.42747L13.1441 1.62176Z"
            fill="url(#paint0_linear_211_3820)"
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_211_3820"
                x1={-3}
                y1={33.0001}
                x2={33.2099}
                y2={-2.78756}
                gradientUnits="userSpaceOnUse"
            >

                <Stop stopColor={choose ? "#FFA15E" : "#E0E0E0"} />
                <Stop offset={1} stopColor={choose ? "#FFCD60" : "#E0E0E0"} />
            </LinearGradient>
        </Defs>
    </Svg>
);
export default SVGComponent;
