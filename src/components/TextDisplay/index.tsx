import { StyleProp, Text, TextStyle } from 'react-native';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import sty from '../../themes/sty';
import { getFontSize, getFontFamilyBeViet } from '../../utils/helpers';
import { appColor } from '../../constant/appColor';

interface TextDisplayProps {
  text: string | number | null | undefined;
  color?: string;
  fontSize?: number;
  styles?: StyleProp<TextStyle>;
  fontWeight?: 'bold' | 'semibold' | 'medium' | 'regular' | 'light';
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
  textAlign?: 'left' | 'center' | 'right' | 'justify' | undefined;
  lineHeight?: number;
  padding?: number;
}

const TextDisplay = ({
  text,
  color,
  fontSize,
  styles,
  fontWeight,
  numberOfLines,
  ellipsizeMode,
  textAlign,
  lineHeight,
  padding,
}: TextDisplayProps) => {
  const { fontSize: level } = useAppSelector(state => state.common);
  return (
    <Text
      numberOfLines={numberOfLines||2 }
      ellipsizeMode={ellipsizeMode}
      style={[
        {
          color: color || "#535862",
          fontSize: getFontSize(level, fontSize || 14, lineHeight || 20)
            ?.fontSize,
          fontFamily: getFontFamilyBeViet(fontWeight || 'medium'),
          textAlign: textAlign || 'left',
          lineHeight: getFontSize(level, fontSize || 14, lineHeight || 20)
            ?.lineHeight,
          padding: padding || 0,
        },
        sty.shrink_1,
        styles,
      ]}
    >
      {text}
    </Text>
  );
};

export default TextDisplay;
