import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TextDisplay } from '../../../../components';
import sty from '../../../../themes/sty';
import IMAGES from '../../../../assets/images';
import Tag from '../../../../components/Tag';
import { appColor } from '../../../../constant/appColor';
import { useAppSelector } from '../../../../redux/hooks';

interface HeaderBackProps {
  title: string;
  subTitle?: string;
  style?: StyleProp<ViewStyle>;
  code_order?: string,
  icon?: any;
  status?: number,
}

const HeaderDetailOrder = ({
  title,
  style,
  icon,
  code_order,
  status
}: HeaderBackProps) => {
  const navigate = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const { orderDetail } = useAppSelector(state => state.report);

  return (
    <View style={[styles.HeaderBack, { paddingTop: insets.top }, style]}>
      <TouchableOpacity
        activeOpacity={1}
        style={sty.p_16}
        onPress={() => navigate.goBack()}>
        <Image
          style={[sty.w_30, sty.h_30, sty.objectScaleDown]}
          source={icon ? icon : IMAGES.COMMON.icon_back_bg}
        />
      </TouchableOpacity>
      <View style={[sty.shrink_1, sty.grow_1]}>
        <TextDisplay
          text={title || ''}
          fontSize={18}
          lineHeight={24}
          color="#181D27"
          fontWeight="bold"
        />
        <View style={[sty.flexRow,sty.itemsCenter, sty.gap_8]}>
          <Image source={IMAGES.ORDER.document} style={{ height: 13, width: 11 }}></Image>
          <TextDisplay text={orderDetail?.order_code}></TextDisplay>
          <Image source={IMAGES.ORDER.dot} style={{ height: 6, width: 6 }}></Image>
          <Tag bgColor={orderDetail?.status == "hoan_thanh" ? appColor.bgGreen : appColor.bgOrange} label={orderDetail?.status == "hoan_thanh"? "Hoàn thành" : "Đang xử lý"} color={orderDetail?.status == "hoan_thanh" ? appColor.textGreen : appColor.textOrange}></Tag>
        </View>
      </View>

    </View>
  );
};

export default HeaderDetailOrder;

const styles = StyleSheet.create({
  HeaderBack: {
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 4,
  },
});
