import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import sty from '../../../themes/sty';
import { Text } from 'react-native-svg';
import { appColor } from '../../../constant/appColor';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IMAGES_FORM from '../../../assets/images/FORM';
import { TextDisplay } from '../../../components';
import { useAppSelector } from '../../../redux/hooks';
import IMAGES from '../../../assets/images';
import { useNavigation } from '@react-navigation/core';
import { ROOT_ROUTES, HOME_ROUTES } from '../../../routes';

const HeaderHome = () => {
    const insets = useSafeAreaInsets()
    const navigate = useNavigation<any>();

    const { user, userDisplay } = useAppSelector(state => state.auth);
    ;
    return (
        <View style={[styles.HeaderBack, { paddingTop: insets.top }]}>
            <View style={[sty.flexRow, sty.itemsCenter, sty.gap_12]}>
                <Image source={
                    user && user.avatar
                        ? { uri: user.avatar }
                        : IMAGES.HOME.image_home
                } style={{ width: 52, height: 52, borderColor: appColor.primary, borderWidth: 1, borderRadius: 26, overflow: "hidden" }} ></Image>
                <View>
                    <TextDisplay fontWeight='bold' lineHeight={30} fontSize={16} color={appColor.textBlack} text={user.full_name} />
                    {/* {!user && */}
                    <TextDisplay text={"Đăng nhập/Đăng ký"} color={appColor.primary} styles={{textDecorationLine:'underline'}} fontWeight='bold'/>
                    {/* } */}
                </View>


            </View>
            <TouchableOpacity activeOpacity={0.8}
                onPress={() => navigate.navigate(ROOT_ROUTES.HOME_STACK, {
                    screen: HOME_ROUTES.INFO_NOTIFICATION,
                })}
            >

                <View style={[{ borderRadius: '100%', borderColor: "#A4AFBD", minWidth: 45, height: 45, alignItems: "center", display: 'flex', flexDirection: 'row', justifyContent: 'center', borderWidth: 1, padding: 5 }]}>
                    <Image source={IMAGES.HOME.icon_notification}
                        style={{ width: 28, height: 28, borderColor: appColor.textGray }} ></Image>
                    <View style={styles.notifiCount}>
                        <TextDisplay fontSize={12} fontWeight='bold' color='#fff' text={45} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>)
}
export default HeaderHome;

const styles = StyleSheet.create({
    HeaderBack: {
        display: "flex",
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingBottom: 10,
        backgroundColor: "#fff",
        flexDirection: 'row',
        alignItems: 'center',
    },
    notifiCount: {
        flex: 1,
        display: "flex",
        justifyContent: 'center',
        position: "absolute",
        backgroundColor: "#FF605D",
        paddingHorizontal: 3,
        borderRadius: 8,
        right: 0,
        top: -8,
    }
});
