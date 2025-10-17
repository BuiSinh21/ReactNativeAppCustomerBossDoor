/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-catch-shadow */
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
import { useNavigation, useRoute } from '@react-navigation/native';
// import { AUTH_ROUTES, ROOT_ROUTES } from '../../../routes';
import { GradientBackground, TextDisplay } from '../../../components';
import { useState } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
// import {
//     setModalLoading,
//     setModalSuccess,
// } from '../../../redux/slices/commonSlice';
import sty from '../../../themes/sty';
import IMAGES_LOGIN from '../../../assets/images/LOGIN';
import IMAGES from '../../../assets/images';

const isTablet = () => {
    const { width, height } = Dimensions.get('window');
    const aspectRatio = Math.max(width, height) / Math.min(width, height);
    return (
        Platform.OS === 'ios' && Math.min(width, height) >= 768 && aspectRatio < 1.8
    );
};

const ConfirmPassword = () => {
    // const dispatch = useAppDispatch();
    // const route = useRoute();
    // const { email, valueOtp } = route.params as {
    //     email: string;
    //     valueOtp: string;
    // };
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<any>();
    const [error, setError] = useState<string>('');
    const [newPassWord, setNewPassword] = useState<string>('');
    const [confirmPassWord, setConfirmPassword] = useState<string>('');
    const [showConfirmPassword, setShowConfirmPassword] =
        useState<boolean>(false);
    const [errorNewPass, setErrorNewPass] = useState<string>('');
    const [errorConfirmPass, setErrorConfirmPass] = useState<string>('');
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    // const iconEyes = IMAGES.Login.icon_eye1;
    // const iconEyesOff = IMAGES.Login.icon_eye2;
    const clearError = (field: string) => {
        switch (field) {
            case 'password':
                setError('');
                break;
            case 'newPassword':
                setErrorNewPass('');
                break;
            case 'confirmPassword':
                setErrorConfirmPass('');
                break;
        }
    };
    // const validateForm = () => {
    //     let isValid = true;
    //     setError('');
    //     setErrorNewPass('');
    //     setErrorConfirmPass('');
    //     if (!newPassWord.trim()) {
    //         setErrorNewPass('Vui lòng nhập mật khẩu mới');
    //         isValid = false;
    //     } else if (newPassWord.length < 6) {
    //         setErrorNewPass('Mật khẩu mới phải có ít nhất 6 ký tự');
    //         isValid = false;
    //     }
    //     if (!confirmPassWord.trim()) {
    //         setErrorConfirmPass('Vui lòng nhập lại mật khẩu');
    //         isValid = false;
    //     } else if (newPassWord !== confirmPassWord) {
    //         setErrorConfirmPass('Mật khẩu xác nhận không khớp');
    //         isValid = false;
    //     }
    //     return isValid;
    // };

    // const handleChangePassWord = async () => {
    //     if (!validateForm()) return;
    //     dispatch(setModalLoading(true));
    //     try {
    //         const response = await restPassWordSendCodeAPI({
    //             email,
    //             code: valueOtp,
    //             password: newPassWord,
    //             password_confirmation: confirmPassWord,
    //         });
    //         dispatch(setModalLoading(false));
    //         dispatch(
    //             setModalSuccess({
    //                 open: true,
    //                 title: response?.data?.message || 'Đổi mật khẩu thành công',
    //             }),
    //         );
    //         navigation.navigate(ROOT_ROUTES.AUTH_STACK, {
    //             screen: AUTH_ROUTES.LOGIN_SCREEN,
    //         });
    //     } catch (error: any) {
    //         handleErrorMessage(error);
    //         dispatch(setModalLoading(false));
    //     }
    // };
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
                                    <View
                                        style={sty.w60_p}
                                    >
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
                                    sty.justifyCenter,
                                    sty.pl_16,
                                    sty.pr_16,
                                ]}
                            >
                                <View
                                    style={[styles.containerInformationLogin, sty.w_full]}
                                >
                                    <View>
                                        <View
                                            style={[
                                                sty.flexRow,
                                                sty.justifyBetween,
                                                sty.itemsCenter,
                                            ]}
                                        >
                                            <View style={styles.InputPassword}>
                                                <TextInput
                                                    style={styles.Input}
                                                    placeholder="Nhập mật khẩu mới"
                                                    placeholderTextColor="#AAAAAA"
                                                    value={newPassWord}
                                                    secureTextEntry={!showNewPassword}
                                                    onChangeText={value => setNewPassword(value)}
                                                />
                                                <TouchableOpacity
                                                    style={styles.ButtonPassword}
                                                    activeOpacity={0.8}
                                                    onPress={() => setShowNewPassword(!showNewPassword)}>
                                                    <Image
                                                        source={
                                                            showNewPassword
                                                                ? IMAGES.LOGIN.icon_display_pass
                                                                : IMAGES.LOGIN.icon_hidden_pass
                                                        }
                                                        style={[sty.w_24, sty.h_24, sty.objectScaleDown]}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                            <TouchableOpacity
                                                style={[
                                                    // sty.right_12,
                                                    // sty.top_18,
                                                    sty.absolute,
                                                ]}
                                                onPress={() => setShowNewPassword(!showNewPassword)}
                                            >
                                                <Image
                                                    // source={showNewPassword ? iconEyes : iconEyesOff}
                                                    style={[sty.w_24, sty.h_24]}
                                                    resizeMode="contain"
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        {errorNewPass ? (
                                            <TextDisplay
                                                text={errorNewPass}
                                                fontSize={14}
                                                color="#dc3545"
                                                lineHeight={16}
                                                styles={styles.errorText}
                                            />
                                        ) : null}
                                    </View>
                                    <View style={sty.mt_12}>
                                        <View
                                            style={[
                                                sty.flexRow,
                                                sty.justifyBetween,
                                                sty.itemsCenter,
                                            ]}
                                        >
                                            <View style={styles.InputPassword}>
                                                <TextInput
                                                    style={styles.Input}
                                                    placeholder="Nhập lại mật khẩu mới"
                                                    placeholderTextColor="#AAAAAA"
                                                    value={confirmPassWord}
                                                    secureTextEntry={!showConfirmPassword}
                                                    onChangeText={value => setConfirmPassword(value)}
                                                />
                                                <TouchableOpacity
                                                    style={styles.ButtonPassword}
                                                    activeOpacity={0.8}
                                                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                                                    <Image
                                                        source={
                                                            showConfirmPassword
                                                                ? IMAGES.LOGIN.icon_display_pass
                                                                : IMAGES.LOGIN.icon_hidden_pass
                                                        }
                                                        style={[sty.w_24, sty.h_24, sty.objectScaleDown]}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        {errorConfirmPass ? (
                                            <TextDisplay
                                                text={errorConfirmPass}
                                                fontSize={14}
                                                color="#dc3545"
                                                lineHeight={16}
                                                styles={styles.errorText}
                                            />
                                        ) : null}
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
                                        // onPress={handleChangePassWord}
                                        >
                                            <TextDisplay
                                                text="Thay đổi mật khẩu"
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
        marginTop:15,
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
    IconBack: {
        width: 32,
        height: 32,
        objectFit: 'scale-down',
    },
    errorText: {
        marginTop: 8,
        marginLeft: 4,
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
        fontFamily: FONT_FAMILY.BeVietnamPro_Medium,
    },
    ButtonPassword: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});
export default ConfirmPassword;
