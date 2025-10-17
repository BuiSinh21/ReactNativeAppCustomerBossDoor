import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import IMAGES from '../../assets/images';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import sty from '../../themes/sty';
import TextDisplay from '../TextDisplay';

interface HeaderBackProps {
  title: string;
  subTitle?: string;
  RightIcon?: any;
  style?: StyleProp<ViewStyle>;
  icon?: any;
  styleText?:StyleProp<TextStyle>;
  onPressBack?: () => void;
}
const HeaderBack = ({
  title,
  style,
  RightIcon,
  subTitle,
  styleText,
  icon, onPressBack
}: HeaderBackProps) => {
  const navigate = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const onPress = () => {
    if (!!onPressBack) {
      return onPressBack();
    }
  }
  return (
    <View style={[styles.HeaderBack, { paddingTop: insets.top }, style]}>
      <TouchableOpacity
        activeOpacity={1}
        style={sty.p_16}
        onPress={() => {
          navigate.goBack();
          onPress();
        }}>
        <Image
          style={[sty.w_30, sty.h_30, sty.objectScaleDown]}
          source={icon ? icon : IMAGES.COMMON.icon_back_bg}
        />
      </TouchableOpacity>
      <View style={[sty.shrink_1, sty.grow_1, sty.justifyCenter, sty.itemsCenter]}>
        <TextDisplay
          text={title || ''}
          fontSize={18}
           styles={styleText}
          lineHeight={24}
          color="#181D27"
          fontWeight="bold"
        />
        {!!subTitle && <TextDisplay text={subTitle} color="#52585F" />}
      </View>
      {RightIcon && <View style={sty.pl_12}>{RightIcon}</View>}
    </View>
  );
};

export default HeaderBack;

const styles = StyleSheet.create({
  HeaderBack: {
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    // elevation: 4,
  },
});
