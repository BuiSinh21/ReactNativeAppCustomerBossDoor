import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Text as SvgText,
} from 'react-native-svg';

interface TextGradientProps {
  text: string;
  fontSize: number;
  startColor: string;
  endColor: string;
  fontWeight: 'bold' | 'semibold' | 'medium' | 'regular' | 'light';
  styles?: StyleProp<ViewStyle>;
  textAnchor?: 'end' | "middle" | 'start'
  x?: number,
  y?: number
}

const TextGradient = ({
  text,
  fontSize,
  startColor,
  endColor,
  fontWeight,
  styles,
  textAnchor,
  x,
  y
}: TextGradientProps) => {
  return (
    <View style={styles}>
      <Svg height={fontSize + 20} width="100%">
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor={startColor} stopOpacity="1" />
            <Stop offset="100%" stopColor={endColor} stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <SvgText
          fill="url(#gradient)"
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontFamily="Lora"
          x={x || "38%"}
          y={y || "60%"}
          textAnchor={textAnchor}
          alignmentBaseline="middle"
        >
          {text}
        </SvgText>
      </Svg>
    </View>
  );
};

export default TextGradient;
