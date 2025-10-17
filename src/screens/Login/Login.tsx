import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import sty from '../../themes/sty';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IMAGES from '../../assets/images';
import {
  GradientBackground,
} from '../../components';
import { FONT_FAMILY } from '../../themes/fontFamily';
// import {loginAPI, saveFcmToken} from '../../apis/auth';
import { useNavigation } from '@react-navigation/native';
import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister';

const Login = () => {
  const navigate = useNavigation<any>();
  const insets = useSafeAreaInsets();
  
  const [isRegister, setIsRegister] = useState<boolean>(false);

  return (

    <GradientBackground colors={['#1268EA', '#1268EA']}>
      <ImageBackground
        source={IMAGES.LOGIN.bg_image}
        style={sty.flex_1}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          style={sty.flex_1}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

          <ScrollView
            contentContainerStyle={[
              sty.p_16,
              { paddingBottom: insets.bottom + 160 },
            ]}
            showsVerticalScrollIndicator={false}>

            <View
              style={[
                sty.gap_8,
                sty.itemsCenter,
                {
                  paddingTop: insets.top + 24,
                },
              ]}>
              <Text style={styles.Text}>Đăng nhập</Text>
            </View>
            <View
              style={[
                sty.itemsCenter,
                {
                  paddingTop: 15,
                },
              ]}>
              <Image source={IMAGES.LOGIN.logo} style={styles.Logo} />
            </View>
            {
              isRegister ?

                <FormRegister setRegister={setIsRegister} ></FormRegister> : <FormLogin setRegister={setIsRegister} />
            }
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </GradientBackground >
  );
};

export default Login;

const styles = StyleSheet.create({
  Logo: {
    width: 150,
    height: 150,
    objectFit: 'scale-down',
  },
  HeadingApp: {
    fontSize: 26,
    lineHeight: 34,
  },
  Text: {
    fontWeight: '700',
    color: '#FFF',
    fontSize: 25,
    lineHeight: 28,
    fontFamily: FONT_FAMILY.BeVietnamPro_Medium
  },
});
