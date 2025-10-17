import { ActivityIndicator, StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';
import TextDisplay from '../TextDisplay';
import { appColor } from '../../constant/appColor';

interface ButtonLoadMoreProps {
  onPress: any;
  title?: string;
  bgColor?: string;
  height?: number;
  color?: string;
  fontText?: number
  style?: StyleProp<ViewStyle>
}

const ButtonLoadMore = ({ title, onPress, bgColor, height, color, fontText, style }: ButtonLoadMoreProps) => {
  return (
    <TouchableOpacity
      style={[styles.Button, style, { backgroundColor: bgColor || "", height: height }]}
      activeOpacity={0.5}
      onPress={onPress}>
      <TextDisplay
        styles={{ color: color || appColor.textBlack, fontSize: fontText || 14 }}
        fontWeight="semibold"
        color="#1354D4"
        text={title || 'Xem thêm'}
      />
    </TouchableOpacity>
  );
};

export default ButtonLoadMore;

const styles = StyleSheet.create({
  Button: {
    // alignSelf: 'center',
    display: "flex",

    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center', // Thêm dòng này để căn giữa theo chiều dọc
    padding: 8,
    borderColor: '#1354D4',
    borderWidth: 1,
    borderRadius: 12,

  },
});
