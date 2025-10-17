/* eslint-disable no-catch-shadow */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FONT_FAMILY } from '../../../themes/fontFamily';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AUTH_ROUTES, ROOT_ROUTES } from '../../../routes';
import { GradientBackground, TextDisplay } from '../../../components';
import OTPTextInput from 'react-native-otp-textinput';
import IMAGES from '../../../assets/images';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { setModalLoading } from '../../../redux/slices/commonSlice';
import sty from '../../../themes/sty';

const isTablet = () => {
  const { width, height } = Dimensions.get('window');
  const aspectRatio = Math.max(width, height) / Math.min(width, height);
  return (
    Platform.OS === 'ios' && Math.min(width, height) >= 768 && aspectRatio < 1.8
  );
};

const OTPAuthentication = () => {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const [valueOtp, setValueOtp] = useState<string>('');
  const [countdown, setCountdown] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const [error, setError] = useState<string>('');
  // const { email } = route.params as { email: string };
  // const handleRegister = async () => {
  //   navigation.navigate(ROOT_ROUTES.AUTH_STACK, {
  //     screen: AUTH_ROUTES.RESET_PASSWORD_SCREEN,
  //   });
  // };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleValueOtp = (value: string) => {
    setValueOtp(value);
    if (error) setError('');
  };

  const handleSendAgainEmail = async () => {
    dispatch(setModalLoading(true));
    // try {
    //   const response = await senCodeEmailAPI({ email });
    //   console.log('response', response);
    //   dispatch(setModalLoading(false));
    // } catch (error: any) {
    //   dispatch(setModalLoading(false));
    //   handleErrorMessage(error);
    // }
  };
  const handleContine = async () => {
    navigation.navigate(ROOT_ROUTES.AUTH_STACK, {
      screen: AUTH_ROUTES.LOGIN,
    })

    //   dispatch(setModalLoading(true));
    //   try {
    //     const responsve = await verifyCodelAPI({ email, code: valueOtp });
    //     navigation.navigate(ROOT_ROUTES.AUTH_STACK, {
    //       screen: AUTH_ROUTES.RESET_PASSWORD_SCREEN,
    //       params: { email,valueOtp },
    //     });
    //     dispatch(setModalLoading(false));
    //   }catch (error:any) {
    //     setError(error?.response?.data?.message);
    //     handleErrorMessage(error);
    //     dispatch(setModalLoading(false));
    //   }
    // };
    //   const handleResendCode = () => {
    //   setCountdown(120);
    //   setCanResend(false);
    //   handleSendAgainEmail();
  };
  return (
    <GradientBackground colors={['#1268EA', '#1268EA']}>
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
                  <View style={[sty.w_20, sty.itemsStart]}>
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
                  { marginTop: "20%" }
                ]}
              >
                <View
                  style={[styles.containerInformationLogin, sty.w_full]}
                >
                  <View>
                    <TextDisplay
                      text="Nhập mã xác nhận"
                      color="#181D27"
                      fontSize={18}
                      fontWeight="bold"
                      lineHeight={22}
                      styles={sty.text_center}
                    />
                    <TextDisplay
                      text="Mã xác nhận đã được gửi đến số điện thoại "
                      color="#535862"
                      fontSize={14}
                      fontWeight="medium"
                      lineHeight={20}
                      styles={[sty.text_center, sty.mt_8]}
                    />
                    <TextDisplay
                      text='031788145'
                      // text={email}
                      color="#3683F7"
                      fontSize={16}
                      fontWeight="bold"
                      lineHeight={20}
                      styles={[sty.text_center, sty.mt_4]}
                    />
                  </View>
                  <View>
                    <View style={styles.containerOtp}>
                      <View style={styles.navbarOtp}>
                        <OTPTextInput
                          handleTextChange={value => handleValueOtp(value)}
                          autoFocus={true}
                          inputCount={4}
                          tintColor={error ? '#fc0000' : '#3683f7'}
                          offTintColor={error ? '#fc0000' : '#ccc'}
                          textInputStyle={{
                            ...styles.InputOTP,
                            borderColor: error ? '#fc0000' : '#ccc',
                          }}
                        />
                      </View>
                      <View>
                        <TextDisplay
                          text={error}
                          color="#fc0000"
                          fontSize={14}
                          fontWeight="medium"
                          lineHeight={20}
                          styles={{ paddingTop: 10 }}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      sty.flexRow,
                      sty.justifyCenter,
                      sty.gap_8,
                    ]}
                  >
                    {!canResend ? (
                      <>
                        <TextDisplay
                          text={`(${countdown} s sau)`}
                          fontSize={14}
                          fontWeight="medium"
                          lineHeight={20}
                          color="#3683F7"
                        />
                        <TextDisplay
                          text="Gửi lại mã xác nhận"
                          fontSize={14}
                          fontWeight="medium"
                          lineHeight={20}
                          color="#999999"
                        />
                      </>
                    ) : (
                      <TouchableOpacity>
                        <TextDisplay
                          text="Gửi lại mã xác nhận"
                          fontSize={16}
                          fontWeight="medium"
                          lineHeight={20}
                          color="#3683F7"
                        />
                      </TouchableOpacity>
                    )}
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
                      onPress={handleContine}
                    >
                      <TextDisplay
                        text="Tiếp tục"
                        color="#FFF"
                        fontSize={16}
                        fontWeight="medium"
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
  backgroundBack: {
    backgroundColor: '#74a9f8',
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  containerOtp: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  navbarOtp: {
    alignItems: 'center',
    width: '80%',
  },

  InputOTP: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    width: '100%',
    flexShrink: 1,
    height: 60,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
});
export default OTPAuthentication;
