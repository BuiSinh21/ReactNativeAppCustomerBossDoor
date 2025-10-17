import { View,  KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import InformationBase from './components/InformationBase';
import IMAGES from '../../../../assets/images';
import { GradientBackground, HeaderBack, DividerCustom, TextDisplay } from '../../../../components';
import sty from '../../../../themes/sty';
import { useAppSelector } from '../../../../redux/hooks';

const AccountInfo = () => {
    const insets = useSafeAreaInsets();
    const { user, access_token} = useAppSelector(state => state.auth);
    console.log("access_token |||", access_token);
    return (
        <GradientBackground >
            <HeaderBack title='Thông tin tài khoản' />
            <DividerCustom styles={[sty.mt_12]} height={20} color={"#F4F5F8"} />
            <KeyboardAvoidingView
                style={sty.flex_1}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableOpacity
                    style={sty.flex_1}
                    activeOpacity={1}
                    onPress={Keyboard.dismiss}>
                    <ScrollView

                        contentContainerStyle={[
                            sty.p_16,
                            sty.gap_24,
                            { paddingBottom: insets.bottom + 16 },
                        ]}
                        showsVerticalScrollIndicator={false}>

                        <View>
                            <View style={[sty.gap_12, sty.flexRow, sty.mb_8, sty.itemsCenter, styles.bg_white]}>
                                <Image
                                    source={
                                        user && user.avatar
                                            ? { uri: user.avatar }
                                            : IMAGES.PROFILE.avatar_default
                                    }
                                    // source={IMAGES.PROFILE.avatar_default}
                                    style={styles.Avatar}
                                // onError={() => setAvatarError(true)}
                                />
                                <TextDisplay
                                    fontSize={16}
                                    lineHeight={24}
                                    text={user?.full_name}
                                    color="#181D27"
                                    fontWeight="bold"
                                />
                            </View>
                            <InformationBase />
                        </View>
                    </ScrollView>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </GradientBackground>
    )
}

export default AccountInfo

const styles = StyleSheet.create({
    Avatar: {
        width: 56,
        height: 56,
        objectFit: 'cover',
        borderWidth: 2,
        borderColor: '#1354D4',
        borderRadius: 9999,
    },
    bg_white: {
        backgroundColor: "#fff"

    }
})