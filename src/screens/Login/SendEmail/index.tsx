/* eslint-disable no-catch-shadow */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FONT_FAMILY } from '../../../themes/fontFamily';
import { useState } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { AUTH_ROUTES, ROOT_ROUTES } from '../../../routes';
import { GradientBackground, HeaderBack, TextDisplay } from '../../../components';
import IMAGES from '../../../assets/images';
// import useEmailValidation from '../../../hook/useValiateEmail';
import { useAppDispatch } from '../../../redux/hooks';
import { setModalLoading } from '../../../redux/slices/commonSlice';
import sty from '../../../themes/sty';
import { appColor } from '../../../constant/appColor';

const isTablet = () => {
  const { width, height } = Dimensions.get('window');
  const aspectRatio = Math.max(width, height) / Math.min(width, height);
  return (
    Platform.OS === 'ios' && Math.min(width, height) >= 768 && aspectRatio < 1.8
  );
};

const SendPhoneNumber = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  // const { email, error, setEmail } = useEmailValidation();
  const [errorResetPass, setErrorResetPass] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleChangeEmail = (text: string) => {
    // setEmail(text);
    setErrorResetPass('');
  };

  const handleContine = async () => {
    navigation.navigate(ROOT_ROUTES.AUTH_STACK, {
      screen: AUTH_ROUTES.AUTHEN_CODE,
    })


    // if (email === '') {
    //   setErrorResetPass('Vui lòng nhập email');
    // } else if (error) {
    //   setErrorResetPass(error);
    // } else {
    // }
    // dispatch(setModalLoading(true));
    // try {
    //   const response = await senCodeEmailAPI({ email });
    //   console.log('response', response);
    //   navigation.navigate(ROOT_ROUTES.AUTH_STACK, {
    //     screen: AUTH_ROUTES.OTP_EMAIL_SCREEN,
    //     params: { email },
    //   });
    //   dispatch(setModalLoading(false));
    // } catch (error: any) {
    //   dispatch(setModalLoading(false));
    //   handleErrorMessage(error);
    // }
  };
  return (
    <GradientBackground colors={['#1268EA', '#1268EA']}>
      {/* <HeaderBack  title='Quên mật k'></HeaderBack> */}
      <ImageBackground
        source={IMAGES.LOGIN.bg_image}
        style={sty.flex_1}
        resizeMode="cover"
      >
        <TouchableOpacity
          style={{
            paddingTop: insets.top + 16,
          }}
          activeOpacity={1}
          onPress={Keyboard.dismiss}
        >
          <View style={sty.relative}>
            <View
              style={[
                sty.absolute,
                sty.top_0,
                sty.left_0,
                sty.right_0,
                sty.flexCol,
              ]}
            >
              <View style={styles.navbarIcon}>

                <View
                  style={[
                    sty.flexRow,
                    sty.justifyBetween,
                    sty.itemsCenter,
                    sty.absolute,
                    sty.w_full,
                    { top: -8 },
                  ]}
                >
                  <View >
                    <TouchableOpacity
                      onPress={() => {
                        navigation.goBack();
                      }}
                    >
                      <Image
                        style={styles.IconBack}
                        source={IMAGES.COMMON.icon_back_login}
                      />
                    </TouchableOpacity>
                  </View>
                  <View >
                    <TextDisplay
                      text="Quên mật khẩu"
                      color="#FFF"
                      fontSize={18}
                      fontWeight="bold"
                      lineHeight={24}
                      styles={{ textAlign: 'center' }}
                    />
                  </View>
                  <View style={sty.w_20} />
                </View>
              </View>
            </View>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
              <View
                style={[
                  sty.h_full,
                  sty.w_full,
                  sty.bg_transparent,
                  sty.pl_16,
                  sty.pr_16,
                  , { marginTop: "20%" }
                ]}
              >
                <View
                  style={[styles.containerInformationLogin, sty.w_full]}
                >
                  <View>
                    <View>
                      <View style={styles.InputPassword}>
                        <TextInput
                          style={styles.Input}
                          placeholder="Nhập số điện thoại đã đăng ký"
                          placeholderTextColor="#838C97"
                          value={phone}
                          onChangeText={value => setPhone(value)}
                        />
                        {phone?.length > 0 && (
                          <TouchableOpacity
                            style={styles.ButtonPassword}
                            activeOpacity={0.8}
                            onPress={() => setPhone('')}>
                            <Image
                              source={IMAGES.FORM.icon_clear_value}
                              style={[sty.w_24, sty.h_24, sty.objectScaleDown]}
                            />
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                    <TextDisplay
                      text="Hãy kiểm tra mã số được gửi tới số điện thoại của bạn để tiến hành thay đổi mật khẩu"
                      color={appColor.primary}
                      fontSize={14}
                      fontWeight="medium"
                      lineHeight={22}
                      styles={[sty.mt_4, sty.mb_12]}
                    />
                  </View>
                  <View
                    style={[
                      sty.gap_8,
                      sty.mt_16,
                      sty.mb_16,
                    ]}
                  >
                    <TouchableOpacity
                      style={styles.ButtonLogin}
                      activeOpacity={0.8}
                      onPress={handleContine}
                    >
                      <TextDisplay
                        text="Tiếp tục"
                        color="#FFF"
                        fontSize={16}
                        fontWeight="bold"
                        lineHeight={24}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </TouchableOpacity>
      </ImageBackground>

    </GradientBackground>
  );
};
const styles = StyleSheet.create({
  NameApp: {
    width: 123,
    height: 30,
    objectFit: 'scale-down',
  },
  LogoApp: {
    width: 56,
    height: 56,
    objectFit: 'scale-down',
  },

  containerInformationLogin: {
    height: 'auto',
    padding: 16,
    backgroundColor: '#ffff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 12,
  },
  ButtonLogin: {
    width: '100%',
    padding: 12,
    backgroundColor: '#3683f7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  ButtonLoginDisabled: {
    backgroundColor: '#f2f2f2',
  },
  ButtonCreatePassword: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#1354D4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  ButtonLoginGoogle: {
    width: '100%',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    gap: 16,
    flexDirection: 'row',
    borderColor: '#edeff2',
    borderWidth: 1,
  },
  ButtonLoginFacebook: {
    width: '100%',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    gap: 16,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#2e90ff',
    backgroundColor: '#5a85d4',
  },
  ButtonLoginApple: {
    width: '100%',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    gap: 16,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#edeff2',
    backgroundColor: '#fff',
  },
  navbarIcon: {
    height: '30%',
    paddingTop: 350,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    paddingLeft: 34,
  },
  ForgotPassword: {
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  margIcon: {
    marginRight: 10,
  },
  changleAccount: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#dbdfe5',
    width: 32,
    height: 32,
  },
  ButtonTouchFace: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#dbdfe5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  InputItem: {
    height: 38,
    flexGrow: 1,
    backgroundColor: '#fff',
    flexShrink: 1,
    fontFamily: FONT_FAMILY.BeVietnamPro_Medium,
    flexDirection: 'row',
    alignItems: 'center',
  },
  InputItemContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  iconGoogleFacebook: {
    width: 20,
    height: 20,
    objectFit: 'scale-down',
  },
  IconBack: {
    width: 32,
    height: 32,
    objectFit: 'scale-down',
  },
  InputPassword: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#dbdfe5',
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  Input: {
    flex: 1,
    height: 42,
    fontSize: 16,
    color: '#435869',
    fontFamily: FONT_FAMILY.BeVietnamPro_Medium,
  },
  ButtonPassword: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

});
export default SendPhoneNumber;
