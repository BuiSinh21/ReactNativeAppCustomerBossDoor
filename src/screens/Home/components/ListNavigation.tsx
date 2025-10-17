import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import IMAGES from '../../../assets/images'
import { useNavigation } from '@react-navigation/native';
import { ButtonCustom, DividerCustom, TextDisplay } from '../../../components'
import sty from '../../../themes/sty'
import { IconArrowRight } from '../../../components/Icons'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { setModalLoading } from '../../../redux/slices/commonSlice'
import { resetAuthState } from '../../../redux/slices/authSlice'
import { handleErrorMessage } from '../../../utils/helpers';
import { logoutAPI } from '../../../apis/auth';
import { PROFILE_ROUTES, ROOT_ROUTES } from '../../../routes';

const ListNavigation = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigation<any>();
    const { user, fcmToken } = useAppSelector(state => state.auth);
    const list =
    {
        listTechnician: {
            img: IMAGES.ACCOUNT.listTechnician,
            label: "Danh sách kỹ thuật viên"
        },
        ACCOUNT: {
            img: IMAGES.ACCOUNT.account_img,
            label: "Thông tin tài khoản"
        },
        REQUEST_SUPPORT: {
            img: IMAGES.ACCOUNT.warning,
            label: "Yêu cầu hỗ trợ"
        },
        SUPPORT:
        {
            img: IMAGES.ACCOUNT.support,
            label: "Hỗ trợ"
        },
    }

  

    return (
        <View style={[sty.flex_1]}>
            <TouchableOpacity activeOpacity={0.8}
                onPress={() =>
                    navigate.navigate(ROOT_ROUTES.PROFILE_STACK, {
                        screen: PROFILE_ROUTES.ACCOUNT_INFO,
                    })
                }>
                <View style={[sty.flexRow, styles.sectionToach]}>
                    <View style={[sty.flexRow, styles.divName]}>
                        <Image style={[styles.img, sty.mr_12]} source={list.ACCOUNT.img} />
                        <TextDisplay styles={sty.pb_4} text={list.ACCOUNT.label} color="#444A55" />
                    </View>
                    <View>
                        <IconArrowRight />
                    </View>
                </View>
            </TouchableOpacity>

            <View style={[styles.boxRequest]}>
                <TouchableOpacity activeOpacity={0.8}
                    onPress={() =>
                        navigate.navigate(ROOT_ROUTES.PROFILE_STACK, {
                            screen: PROFILE_ROUTES.LIST_TECHNICIAN,
                        })
                    }>
                    <View style={[sty.flexRow, styles.request]}>

                        <View style={[sty.flexRow, styles.divName]}>
                            <Image style={[styles.img, sty.mr_12]} source={list.listTechnician.img} />
                            <TextDisplay styles={sty.pb_4} text={list.listTechnician.label} color="#444A55" />
                        </View>
                        <View>
                            <IconArrowRight />
                        </View>
                    </View>
                </TouchableOpacity>
                <DividerCustom />
                <TouchableOpacity activeOpacity={0.8}
                    onPress={() =>
                        navigate.navigate(ROOT_ROUTES.PROFILE_STACK, {
                            screen: PROFILE_ROUTES.REQUEST_SUPPORT,
                        })
                    }>
                    <View style={[sty.flexRow, styles.request]}>

                        <View style={[sty.flexRow, styles.divName]}>
                            <Image style={[styles.img, sty.mr_12]} source={list.REQUEST_SUPPORT.img} />
                            <TextDisplay styles={sty.pb_4} text={list.REQUEST_SUPPORT.label} color="#444A55" />
                        </View>
                        <View>
                            <IconArrowRight />
                        </View>
                    </View>
                </TouchableOpacity>
                <DividerCustom />
                <TouchableOpacity onPress={() =>
                    navigate.navigate(ROOT_ROUTES.PROFILE_STACK, {
                        screen: PROFILE_ROUTES.SUPPORT,
                    })
                } activeOpacity={0.8}>
                    <View style={[sty.flexRow, styles.request]}>
                        <View style={[sty.flexRow, styles.divName]}>
                            <Image style={[styles.img, sty.mr_12]} source={list.SUPPORT.img} />
                            <TextDisplay styles={sty.pb_4} text={list.SUPPORT.label} color="#444A55" />
                        </View>
                        <View>
                            <IconArrowRight />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

         
        </View >
    )
}

export default ListNavigation;
const styles = StyleSheet.create({
    img: {
        width: 36,
        height: 36
    },
    divName: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
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
    boxRequest: {
        borderWidth: 1,
        marginTop: 5,
        flex: 1,
        borderRadius: 15,
        paddingHorizontal: 15,
        backgroundColor: "#FAFBFC",
        borderColor: '#EDEFF2',
    },
    request: {
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: "space-between",
        alignSelf: 'flex-start',
        width: "100%"
    },
    ButtonLogout: {
        marginTop: 15,
        padding: 8,
        borderWidth: 1,
        borderColor: '#DBDFE5',
        borderRadius: 12,
        backgroundColor: '#EDEFF2',
        justifyContent: 'center',
        gap: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
})