import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { ButtonCustom, TextDisplay, TextGradient } from '../../../components'
import { useAppDispatch } from '../../../redux/hooks';
import { setModalLoading, setToast } from '../../../redux/slices/commonSlice';
import { loginAPI } from '../../../apis/auth';
import { setAccessToken, setRefreshToken, setUser } from '../../../redux/slices/authSlice';
import { CommonActions, useNavigation } from '@react-navigation/native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { handleErrorMessage } from '../../../utils/helpers';
import { BOTTOM_TAB_ROUTES, ROOT_ROUTES } from '../../../routes';
import { FONT_FAMILY } from '../../../themes/fontFamily';
// import LineRow from '../../../components/LineRow';
import sty from '../../../themes/sty';
import { appColor } from '../../../constant/appColor';
import IMAGES from '../../../assets/images';
interface FormRegisterProps {
  setRegister: React.Dispatch<React.SetStateAction<boolean>>;
}
const FormRegister = (props: FormRegisterProps) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const navigate = useNavigation<any>();
  // const insets = useSafeAreaInsets();

  const [show, setShow] = useState<boolean>(false);
  const handleLogin = async () => {
    try {
      if (name?.trim()?.length <= 0) {
        return dispatch(
          setToast({
            open: true,
            title: 'Tên tài khoản là bắt buộc',
          }),
        );
      }
      if (pass?.trim()?.length <= 0) {
        return dispatch(
          setToast({
            open: true,
            title: 'Mật khẩu là bắt buộc',
          }),
        );
      }
      dispatch(setModalLoading(true));

      const res = await loginAPI({
        username: name,
        password: pass,
      });
      if (res.status == 200) {
        dispatch(setAccessToken(res?.data?.data?.access_token));
        dispatch(setRefreshToken(res?.data?.data?.refresh_token));
        dispatch(setUser(res?.data?.data?.technician))
        navigate.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: ROOT_ROUTES.BOTTOM_TAB_STACK,
                params: {
                  screen: BOTTOM_TAB_ROUTES.HOME,
                },
              },
            ],
          }),
        );
      }
      dispatch(setModalLoading(false));
    } catch (error) {
      dispatch(setModalLoading(false));
      handleErrorMessage(error, {
        400: 'Tài khoản hoặc mật khẩu không chính xác.',
        401: 'Tài khoản hoặc mật khẩu không chính xác.',
        404: 'Tài khoản hoặc mật khẩu không chính xác.',
        405: 'Tài khoản của bạn chưa được kích hoạt.',
        422: 'Tài khoản hoặc mật khẩu không chính xác.',
      });
    }
  };
  return (
    <View style={styles.FormCover}>
      <TextDisplay text={"Chào mừng đến với"} color='#535862' styles={{ fontWeight: '500' }}  ></TextDisplay>
      <TextGradient
        startColor="#3683F7"
        endColor="#3FBFFF"
        fontSize={20}
        textAnchor='end'
        text={"Giải pháp Cửa"}
        fontWeight={'bold'}
      />
      <View style={styles.FormRegister} >
        <View style={styles.InputPassword}>
          <TextInput
            style={styles.Input}
            placeholder="Nhập tên tài khoản"
            placeholderTextColor="#AAAAAA"
            value={name}
            onChangeText={value => setName(value)}
          />
          {name?.length > 0 && (
            <TouchableOpacity
              style={styles.ButtonPassword}
              activeOpacity={0.8}
              onPress={() => setName('')}>
              <Image
                source={IMAGES.FORM.icon_clear_value}
                style={[sty.w_24, sty.h_24, sty.objectScaleDown]}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.InputPassword}>
          <TextInput
            style={styles.Input}
            placeholder="Nhập mật khẩu"
            placeholderTextColor="#AAAAAA"
            value={pass}
            secureTextEntry={!show}
            onChangeText={value => setPass(value)}
          />
          <TouchableOpacity
            style={styles.ButtonPassword}
            activeOpacity={0.8}
            onPress={() => setShow(!show)}>
            <Image
              source={
                show
                  ? IMAGES.LOGIN.icon_display_pass
                  : IMAGES.LOGIN.icon_hidden_pass
              }
              style={[sty.w_24, sty.h_24, sty.objectScaleDown]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.InputPassword}>
          <TextInput
            style={styles.Input}
            placeholder="Nhập họ và tên"
            placeholderTextColor="#AAAAAA"
            value={pass}
            secureTextEntry={!show}
            onChangeText={value => setPass(value)}
          />
        </View>

        <View style={styles.InputPassword}>
          <TextInput
            style={styles.Input}
            placeholder="Nhập số điện thoại"
            placeholderTextColor="#AAAAAA"
            value={pass}
            secureTextEntry={!show}
            onChangeText={value => setPass(value)}
          />
        </View>
        <View style={styles.InputPassword}>
          <TextInput
            style={styles.Input}
            placeholder="Nhập địa chỉ"
            placeholderTextColor="#AAAAAA"
            value={pass}
            secureTextEntry={!show}
            onChangeText={value => setPass(value)}
          />
        </View>
        <ButtonCustom text="Đăng ký"
          lineHeight={30}
          onPress={() => handleLogin()}
        />
        <View style={[
          sty.flexRow,
          sty.justifyCenter,
          sty.gap_4
        ]}>
          <TextDisplay text={"Đã có tài khoản?"} />
          <TouchableOpacity onPress={() => props.setRegister(false)} activeOpacity={0.8}>
            <TextDisplay text={"Đăng nhập ngay"} styles={{ textDecorationLine: 'underline' }} color={appColor.primary} fontWeight='bold' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default FormRegister;
const styles = StyleSheet.create({
  FormRegister: {
    marginVertical: 12,
    gap: 14,
  },
  InputPassword: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#dbdfe5',
    paddingHorizontal: 12,
    paddingVertical: 4,
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
    fontFamily: FONT_FAMILY.BeVietnamPro_Medium
  },
  ButtonPassword: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  FormCover: {
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 30
  },
});
