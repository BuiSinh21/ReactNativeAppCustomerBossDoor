import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DividerCustom, GradientBackground, HeaderBack, TextDisplay } from '../../components'
import sty from '../../themes/sty'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { appColor } from '../../constant/appColor'
import IMAGES from '../../assets/images'
import { useNavigation } from '@react-navigation/native'
import { HOME_ROUTES, ROOT_ROUTES } from '../../routes'

const ListUser = () => {
    const navigate = useNavigation<any>();
    const insets = useSafeAreaInsets();
    const array = [
        {
            name: "User 1",
            phone: "0986903846",
            pass: "************"
        },
        {
            name: "User 2",
            phone: "0986903846",
            pass: "************"
        },
        {
            name: "User 3",
            phone: "0986903846",
            pass: "************"
        },
        {
            name: "User 4",
            phone: "0986903846",
            pass: "************"
        },
        {
            name: "User 5",
            phone: "0986903846",
            pass: "************"
        },
    ]
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <HeaderBack title='Danh sách người dùng' />
            <DividerCustom color='#EEEFF2' styles={[sty.mt_12, sty.h_16]} />
            <ScrollView
                contentContainerStyle={[
                    sty.p_16,
                    {
                        paddingBottom: insets.bottom + 16
                    },
                ]}
                showsVerticalScrollIndicator={false}>
                {array.map((item, index) =>
                    <View style={[sty.mb_16]} key={index}>
                        <View style={[sty.flexRow, sty.mb_8, sty.justifyBetween, sty.itemsCenter]}>
                            <TextDisplay text={item.name} color={appColor.textBlack} fontWeight='bold' fontSize={14} />
                            <TouchableOpacity activeOpacity={0.8} >
                                <Image style={{ width: 24, height: 24 }} source={IMAGES.PROFILE.icon_edit_profile}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.itemBox}>
                            <View style={[sty.flexRow, sty.justifyBetween]}>
                                <TextDisplay text={"Số điện thoại"} color={appColor.textGray} fontSize={14} />
                                <TextDisplay text={item.name} color={appColor.textBlack} fontSize={14} fontWeight='bold' />
                            </View>
                            <View style={[sty.flexRow, sty.mt_8, sty.justifyBetween]}>
                                <TextDisplay text={"Mật khẩu"} color={appColor.textGray} fontSize={14} />
                                <TextDisplay text={item.pass} color={appColor.textBlack} fontSize={14} />
                            </View>
                        </View>
                    </View>
                )}
            </ScrollView>
            <TouchableOpacity style={styles.fab} onPress={() => {
                navigate.navigate(ROOT_ROUTES.HOME_STACK, {
                    screen: HOME_ROUTES.ADD_USER,
                });
            }}>
                <GradientBackground
                    style={{
                        width: "100%",
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 32,
                    }}
                    colors={['#3683F7', '#3FBFFF']}>
                    <Image style={{ width: 32, height: 32 }} source={IMAGES.COMMON.icon_plus} />
                </GradientBackground>
            </TouchableOpacity>
        </View>
    )
}

export default ListUser

const styles = StyleSheet.create({
    itemBox: {
        backgroundColor: '#FAFBFC',
        padding: 15,
        borderRadius: 15,
        borderColor: "#EDEFF2",
        borderWidth: 1
    },
    fab: {
        position: 'absolute',
        display: 'flex',
        right: 20,
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
        ...Platform.select({
            android: {
                bottom: 0,
            },
            ios: {
                bottom: 30,
            },
        }),
    },
})    