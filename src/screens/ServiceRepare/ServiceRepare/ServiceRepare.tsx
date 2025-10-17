import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ButtonCustom, ButtonLoadMore, HeaderBack, TextDisplay } from '../../../components'
import sty from '../../../themes/sty'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { appColor } from '../../../constant/appColor'
import LineRow from '../../../components/LineRow'
import FormInputText2 from '../../../components/Form/FormInputText2'
import IMAGES from '../../../assets/images'
import { requestLocationPermission } from '../../../common/until'
import Geolocation from '@react-native-community/geolocation'
import Toast from 'react-native-toast-message'
import { setModalLoading } from '../../../redux/slices/commonSlice'
import { setGeolocation } from '../../../redux/slices/authSlice'
import { useNavigation } from '@react-navigation/native';
import { ROOT_ROUTES, SERVICE_PREPARE_ROUTES } from '../../../routes'

const ServiceRepare = () => {
    const insets = useSafeAreaInsets();
    const dispatch = useAppDispatch();
    const navigate = useNavigation<any>();
    const { user, province } = useAppSelector(state => state.auth);
    const [address, setAddress] = useState<string>("")
    const getLocation = async () => {
        dispatch(setModalLoading(true));
        const hasPermission = await requestLocationPermission();
        if (!hasPermission) return;

        Geolocation.getCurrentPosition(
            pos => {
                Toast.show({
                    type: "success",
                    text1: "Thành công",
                    text2: "Lấy vị trí thành công",
                    text2Style: { color: appColor.textBlack }
                });
                dispatch(setModalLoading(false));
                dispatch(setGeolocation(pos.coords));
                console.log('Vị trí hiện tại:', pos.coords);
            },
            err => {
                Toast.show({
                    type: "error",
                    text1: "Lỗi lấy vị trí",
                    text2: "Lấy vị trí không thành công",
                    text2Style: { color: appColor.textBlack }
                });
                dispatch(setModalLoading(false));
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <HeaderBack style={{ backgroundColor: "#fff" }} title='Dịch vụ sửa chữa' />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView
                    contentContainerStyle={[
                        sty.p_16,
                        {
                            backgroundColor: '#fff',
                            marginTop: 20,
                            marginHorizontal: 15,
                            borderRadius: 15,
                        },
                    ]}
                    showsVerticalScrollIndicator={false}>
                    <View>
                        <TextDisplay fontSize={14} text={"Họ và tên"} />
                        <TextDisplay lineHeight={35} fontSize={16} color={appColor.textBlack} fontWeight='medium' text={user.full_name} />
                    </View>
                    <LineRow />
                    <View>
                        <TextDisplay fontSize={14} text={"Số điện thoại"} />
                        <TextDisplay lineHeight={35} fontSize={16} color={appColor.textBlack} fontWeight='medium' text={user.phone} />
                    </View>
                    <LineRow />
                    <FormInputText2
                        minHeight={100}
                        multiline={true}
                        title='Địa chỉ'
                        required={false}
                        placeholder='Nhập địa chỉ'
                        value={address}
                        onChange={(value: string) => setAddress(value)}
                    />
                    <ButtonCustom style={[sty.mt_12]} iconImage={IMAGES.COMMON.icon_location} onPress={() => getLocation()} text='Lấy vị trí hiện tại' backgroundColor='#E1ECFE' color={appColor.primary} />
                </ScrollView>
            </KeyboardAvoidingView>
            <View style={styles.footer}>
                <ButtonLoadMore
                    style={{ width: "85%", borderRadius: 20, paddingHorizontal: 20 }}
                    fontText={16}
                    color='#fff' height={50}
                    onPress={() => {
                            navigate.navigate(ROOT_ROUTES.SERVICE_STACK, {
                                screen: SERVICE_PREPARE_ROUTES.MAP_SERVICE_PREPARE,
                            })
                    }}
                    bgColor='#3683F7'
                    title='Xác nhận' />
            </View>
        </View>
    )
}

export default ServiceRepare

const styles = StyleSheet.create({
    footer: {
        minHeight: 100,
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
    }
})