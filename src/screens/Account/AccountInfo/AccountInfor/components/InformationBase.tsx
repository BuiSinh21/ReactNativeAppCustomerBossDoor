import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import IMAGES from '../../../../../assets/images';
import { TextDisplay } from '../../../../../components';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import sty from '../../../../../themes/sty';
import { PROFILE_ROUTES, ROOT_ROUTES } from '../../../../../routes';


const InformationBase = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigation<any>();
    const { user } = useAppSelector(state => state.auth);

    return (
        <View style={[sty.flex_1]}>
            <View style={[sty.flexRow, sty.justifyBetween, sty.mt_16]}>
                <TextDisplay fontSize={14} fontWeight='bold' color='#181D27' text={"Thông tin cơ bản"}></TextDisplay>
                <TouchableOpacity activeOpacity={0.8} onPress={() =>
                    navigate.navigate(ROOT_ROUTES.PROFILE_STACK, {
                        screen: PROFILE_ROUTES.UPDATE_PROFILE,
                    })
                } >
                    <Image style={[sty.w_24, sty.h_24]} source={IMAGES.PROFILE.icon_edit_profile}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.boxInforSelf}>
                {/* Full name */}
                <View >
                    <View style={[styles.divName]}>
                        <View style={[sty.pb_4, sty.flex_1]}>
                            <TextDisplay styles={[sty.pb_4, sty.flex_1]} text={"Họ và tên:"} color="#444A55" />
                        </View>
                        <View style={[sty.pb_4, sty.flex_2]}>
                            <TextDisplay styles={{ textAlign: 'right' }} text={user?.full_name} color="#181D27" fontWeight='bold' />
                        </View>
                    </View>
                </View>
              
                {/*Phone number */}
                <View >
                    <View style={[styles.divName]}>
                        <View style={[sty.pb_4, sty.flex_1]}>
                            <TextDisplay styles={[sty.pb_4, sty.flex_1]} text={"Số điện thoại:"} color="#444A55" />
                        </View>
                        <View style={[sty.pb_4, sty.flex_2]}>
                            <TextDisplay styles={{ textAlign: 'right' }} text={user?.phone} color="#181D27" fontWeight='bold' />
                        </View>
                    </View>
                </View>
                  {/* Khu vực */}
                <View >
                    <View style={[styles.divName]}>
                        <View style={[sty.pb_4, sty.flex_1]}>
                            <TextDisplay styles={[sty.pb_4, sty.flex_1]} text={"Khu vực:"} color="#444A55" />
                        </View>
                        <View style={[sty.pb_4, sty.flex_2]}>
                            <TextDisplay styles={{ textAlign: 'right' }} text={user?.cccd} color="#181D27" fontWeight='bold' />
                        </View>
                    </View>
                </View>
                {/*Address */}
                <View >
                    <View style={[styles.divName]}>
                        <View style={[sty.pb_4, sty.flex_1]}>
                            <TextDisplay text={"Địa chỉ:"} color="#444A55" />
                        </View>
                        <View style={[sty.pb_4, sty.flex_2]}>
                            <TextDisplay styles={{ textAlign: 'right' }} text={user?.address} color="#181D27" fontWeight='bold' />
                        </View>

                    </View>
                </View>
            </View>


            <View style={[sty.flexRow, sty.justifyBetween, sty.mt_16]}>
                <TextDisplay fontSize={14} fontWeight='bold' color='#181D27' text={"Thông tin đăng nhập"}></TextDisplay>
            </View>

            <View style={styles.boxInforSelf}>
                {/* Tên tài khoản*/}
                <View >
                    <View style={[styles.divName]}>
                        <View style={[sty.pb_4, sty.flex_1]}>
                            <TextDisplay styles={[sty.pb_4, sty.flex_1]} text={"Tên tài khoản:"} color="#444A55" />
                        </View>
                        <View style={[sty.pb_4, sty.flex_2]}>
                            <TextDisplay styles={{ textAlign: 'right' }}  text={user?.username}  color="#181D27" fontWeight='bold' />
                        </View>
                    </View>
                </View>
                {/* Mật khẩu */}
                <View >
                    <View style={[styles.divName]}>
                        <View style={[sty.pb_4, sty.flex_1]}>
                            <TextDisplay styles={[sty.pb_4, sty.flex_1]} text={"Mật khẩu:"} color="#444A55" />
                        </View>
                        <View style={[sty.pb_4, sty.flex_2]}>
                            <TextDisplay styles={{ textAlign: 'right' }} text={"************"} color="#181D27" fontWeight='bold' />
                        </View>
                    </View>
                </View>
                <View >
                    <TouchableOpacity activeOpacity={0.8} onPress={() =>
                        navigate.navigate(ROOT_ROUTES.PROFILE_STACK, {
                            screen: PROFILE_ROUTES.CHANGE_PASSWORD,
                        })
                    }>
                        <TextDisplay text={'Đổi mật khẩu'} color='#3683F7' styles={{ textDecorationLine: 'underline' }} ></TextDisplay>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default InformationBase;
const styles = StyleSheet.create({
    img: {
        width: 36,
        height: 36
    },
    divName: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        paddingVertical: 8,
        alignSelf: 'flex-start',
        justifyContent: 'space-between'
    },
    sectionToach: {
        backgroundColor: "#FAFBFC",
        borderWidth: 1,
        borderColor: '#EDEFF2',
        borderRadius: 15,
        padding: 15,
        width: "100%",
        paddingRight: 15,
        alignItems: 'center',
        justifyContent: "space-between",
        alignSelf: 'flex-start',
        marginBottom: 20
    },
    boxInforSelf: {
        padding: 15,
        backgroundColor: "#FAFBFC",
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#EDEFF2',
        marginTop: 10,
    },
    customRow: {
        alignItems: 'center',
        justifyContent: "space-between",
        alignSelf: 'flex-start',
    }
})