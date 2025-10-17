import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ButtonCustom, DividerCustom, HeaderBack, TextDisplay } from '../../components'
import sty from '../../themes/sty'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { appColor } from '../../constant/appColor'
import { FONT_FAMILY } from '../../themes/fontFamily'
import IMAGES from '../../assets/images'
import LineRow from '../../components/LineRow'

const AddUser = () => {
    const insets = useSafeAreaInsets();
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("")
    const [show, setShow] = useState<boolean>(false)
    return (
        <View style={{flex:1}}>
            <HeaderBack title='Thêm người dùng' />
            <DividerCustom color='#EEEFF2' styles={[sty.mt_12, sty.h_16]} />
            <ScrollView
                contentContainerStyle={[
                    {
                        paddingBottom: insets.bottom + 16
                    },
                ]}
                showsVerticalScrollIndicator={false}>
                <KeyboardAvoidingView
                    style={sty.flex_1}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <View style={[styles.form]}>
                        <TextDisplay text={'Số điện thoại'} color='#444A55' />
                        <View style={styles.InputPassword}>
                            <TextInput
                                style={styles.Input}
                                placeholder="Nhập tên tài khoản"
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
                        <LineRow></LineRow>

                        <TextDisplay text={'Mật khẩu'} color='#444A55' />
                        <View style={styles.InputPassword}>
                            <TextInput
                                style={styles.Input}
                                placeholder="Nhập mật khẩu"
                                placeholderTextColor="#838C97"
                                value={password}
                                secureTextEntry={!show}
                                onChangeText={value => setPassword(value)}
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
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            <View style={styles.footer}>
                <View style={{ flex: 1, width: '100%', paddingHorizontal: 20 }}>
                    <ButtonCustom text='Thêm người dùng' onPress={()=>{}}/>
                </View>
            </View>
        </View>
    )
}

export default AddUser

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#fff',
        padding: 15,
        marginHorizontal: 15,
        borderRadius: 20,
    }
    , InputPassword: {
        borderWidth: 1,
        borderRadius: 16,
        borderColor: '#dbdfe5',
        paddingHorizontal: 12,
        paddingVertical: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginVertical: 15,
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
    footer: {
        position:'absolute',
        bottom:0,
        minHeight: 100,
        width: "100%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
    }
})    