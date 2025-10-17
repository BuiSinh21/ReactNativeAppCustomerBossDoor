import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, KeyboardAvoidingView, ScrollView, Platform, ImageBackground, Image, TouchableOpacity } from "react-native"; // Sửa Text từ react-native

import { useAppDispatch } from "../../redux/hooks";
import HeaderHome from "./components/Header";
import { ButtonCustom, DividerCustom, GradientBackground, TextDisplay } from "../../components";
import sty from "../../themes/sty";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import IMAGES from "../../assets/images";
import { appColor } from "../../constant/appColor";
import PagerViewImage from "../../components/PagerViewImage";
import TableService from "./components/TableService";
import { useNavigation } from "@react-navigation/native";
import { HOME_ROUTES, ROOT_ROUTES, SERVICE_PREPARE_ROUTES } from "../../routes";


const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigation<any>();
  const [timeLeft, setTimeLeft] = useState(300);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timer); // Dọn dẹp khi component unmount
    }
  });

  return (
    <View style={styles.container}>
      <HeaderHome />
      <DividerCustom styles={sty.mt_12} />
      <KeyboardAvoidingView
        style={sty.flex_1}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={[
            sty.gap_24,
            {
              paddingBottom:
                Platform.OS === 'android'
                  ? insets.bottom + 45// nếu là Android
                  : insets.bottom + 45, // nếu là iOS
            },
          ]}
          showsVerticalScrollIndicator={false}>
          <View style={[sty.flexRow, sty.px_16, , sty.justifyBetween]}>
            <View style={styles.boardLeft}>
              <ImageBackground
                source={IMAGES.LOGIN.bg_image}
                style={[
                  sty.flex_1,

                  sty.p_12]}
                resizeMode="cover"
              >
                <View>
                  <TextDisplay text={"Dịch vụ"} color="#fff"></TextDisplay>
                  <TextDisplay text={"Sửa chữa tại nhà"} color="#fff" fontSize={20} lineHeight={40} fontWeight="bold"></TextDisplay>
                </View>
                <ButtonCustom
                  iconImageAfter={IMAGES.HOME.icon_arrow_right}
                  onPress={() => {
                    navigate.navigate(ROOT_ROUTES.SERVICE_STACK, {
                      screen: SERVICE_PREPARE_ROUTES.SERVICE_PREPARE,
                    })
                  }}
                  text="Tìm kiếm KTV ngay"
                  backgroundColor="#fff"
                  fontSize={14}
                  lineHeight={16}
                  color={appColor.primary}
                  style={{ width: 190 }} />
              </ImageBackground>
            </View>
            <TouchableOpacity activeOpacity={0.8}
              onPress={() => navigate.navigate(ROOT_ROUTES.HOME_STACK, {
                screen: HOME_ROUTES.CONTROL,
              })}
            >
              <View style={styles.boardRight}>
                <Image style={{ width: 40, height: 46 }} source={IMAGES.HOME.image_control} />
                <TextDisplay text={"Điều khiển"} color={appColor.primary} fontWeight="bold" />
              </View>
            </TouchableOpacity>
          </View>
          <PagerViewImage />
          {/* Title */}
          <TextDisplay
            color={appColor.textBlack}
            styles={[sty.px_16,]}
            fontSize={18}
            fontWeight="bold"
            text={"Bảng danh mục dịch vụ sửa chữa và sản phẩm phụ tùng thay thế"} />
          <TableService title="Sửa chữa cửa cuốn" />
          <TableService title="Bảo trì và bảo dưỡng định kỳ" />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  boardLeft:
  {
    borderRadius: 15,
    height: 126,
    width: 248,
    backgroundColor: "#1268EA"
  },
  boardRight:
  {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    gap: 10,
    borderRadius: 15,
    height: 126, width: 100,
    borderColor: "#3683F7",
    borderWidth: 2
  }

});

export default HomeScreen;