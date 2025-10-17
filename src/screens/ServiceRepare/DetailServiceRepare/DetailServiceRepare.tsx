import { Alert, Image, KeyboardAvoidingView, Modal, Platform, Pressable, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { ButtonCustom, ButtonLoadMore, HeaderBack, TextDisplay } from '../../../components'
import sty from '../../../themes/sty'
import { useNavigation } from '@react-navigation/native'
import { appColor } from '../../../constant/appColor'
import IMAGES from '../../../assets/images'
import { useAppSelector } from '../../../redux/hooks'
import { downloadAndSaveQR, formatPhoneNumber } from '../../../common/until'
import LineRow from '../../../components/LineRow'
import DisplayImage from '../../../components/DisplayImage/DisplayImage'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const DetailServiceRepare = () => {
    const navigate = useNavigation<any>();
    const { user, geolocation } = useAppSelector((state) => state.auth);
    const [modalVisible, setModalVisible] = useState<boolean>(true)
    const insets = useSafeAreaInsets();
    return (
        <View style={{ flex: 1 }}>
            <HeaderBack style={{ backgroundColor: "#fff" }} title='Dịch vụ sửa chữa' />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView
                    contentContainerStyle={[
                        sty.p_16,
                        {
                            marginTop: 5,
                            borderRadius: 15,
                            paddingBottom: insets.bottom + 200,
                        },
                    ]}
                    showsVerticalScrollIndicator={false}>
                    {/* Thông tin khách hàng */}
                    <View style={styles.boxWhite} >
                        <TextDisplay text={"Thông tin khách hàng"} color={appColor.textBlack} fontSize={16} styles={{ fontWeight: "700" }} />
                        <View style={[sty.flexRow, sty.flex_1, sty.gap_16, sty.mt_12]}>
                            <Image source={IMAGES.ORDER.locationdefault} style={{ height: 18, width: 14 }} />
                            <View style={{ flex: 1 }}>
                                <View style={[sty.flexRow, sty.gap_12, sty.mb_8]}>
                                    <TextDisplay fontWeight='bold' fontSize={14} color={appColor.textBlack} text={user.full_name} />
                                    <TextDisplay text={formatPhoneNumber(user.phone)} />
                                </View>
                                <TextDisplay
                                    text={user.address}
                                    styles={{ flexShrink: 1, flexWrap: "wrap" }}
                                />
                            </View>
                        </View>
                    </View>
                    {/* Thông tin kỹ thuật viên */}
                    <View style={styles.boxWhite} >
                        <TextDisplay text={"Kỹ thuật viên"} color={appColor.textBlack} fontSize={16} styles={{ fontWeight: "700" }} />
                        <View style={[sty.flexRow, sty.justifyBetween, sty.mt_8, sty.mb_8]}>
                            <View style={[sty.flexRow]}>
                                <Image style={{ width: 44, height: 44 }} source={IMAGES.PROFILE.avatar_default} />
                                <View>
                                    <TextDisplay text={"Lê Đức B"} color={appColor.textBlack} fontSize={14} styles={{ fontWeight: "600" }} />
                                    <TextDisplay text={formatPhoneNumber("0951543252")} fontSize={14} />
                                </View>
                            </View>
                            <View>
                                <Image style={{ width: 40, height: 40 }} source={IMAGES.COMMON.icon_phone} />
                            </View>
                        </View>
                        <LineRow />
                        <View style={[sty.flexRow, sty.itemsCenter, sty.gap_12]}>
                            <Image source={IMAGES.FORM.icon_oclock} style={{ height: 18, width: 18 }} />
                            <TextDisplay
                                text={"9 phút (1.0km)"}
                                styles={{ flexShrink: 1, flexWrap: "wrap" }}
                            />
                        </View>
                        <View style={[sty.flexRow, sty.itemsCenter, sty.gap_12, sty.mt_12]}>
                            <Image source={IMAGES.COMMON.icon_location_default} style={{ height: 18, width: 18 }} />
                            <TextDisplay
                                text={"Vị trí hiện tại: 624 Đường Lê Duẩn, Phường Khâm Thiên, Quận Đống Đa, Hà Nội"}
                                styles={{ flexShrink: 1, flexWrap: "wrap" }}
                            />
                        </View>

                    </View>
                    {/* Danh sách dịch vụ */}
                    <View style={styles.boxWhite} >
                        <TextDisplay text={"Danh sách dịch vụ"} color={appColor.textBlack} fontSize={16} styles={{ fontWeight: "700", marginBottom: 10 }} />
                        <ButtonCustom
                            styleImageAfter={{ height: 16, width: 16 }}
                            iconImageAfter={IMAGES.COMMON.ic_add_primary}
                            text='Thêm dịch vụ'
                            color={appColor.primary}
                            onPress={() => { }}
                            backgroundColor={"#E1ECFE"} />
                        <View>
                            <View>
                                <View style={[sty.flexRow, sty.justifyBetween, sty.mt_12]}>
                                    <TextDisplay text={"Thay motor cửa cuốn"} fontWeight='medium' color={appColor.textBlack} />
                                    <Image source={IMAGES.COMMON.icon_delete} style={{ width: 36, height: 36 }} />
                                </View>
                                <View style={[sty.flexRow, sty.gap_16, sty.itemsCenter, sty.justifyBetween]}>
                                    <View style={[sty.flexRow, sty.gap_16, sty.itemsCenter]}>
                                        <Image source={IMAGES.COMMON.ph_abstract_bold} style={{ width: 36, height: 36 }} />
                                        <TextDisplay text={2} color={appColor.primary} />
                                        <Image source={IMAGES.COMMON.ph_add_bold} style={{ width: 36, height: 36 }} />
                                    </View>
                                    <View style={[sty.flexRow, sty.itemsCenter]}>
                                        <TextDisplay text={"4,200,000 đ"} color={appColor.primary} />
                                        <Text>/</Text>
                                        <TextDisplay text={"Bộ"} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* Tình trạng cửa trước khi sửa */}
                    <View style={styles.boxWhite} >
                        <TextDisplay styles={{ marginBottom: 15 }} text={"Tình trạng cửa trước khi sửa"} color={appColor.textBlack} fontWeight='bold' fontSize={16}></TextDisplay>
                        <DisplayImage />
                    </View>
                    <View style={styles.boxWhite} >
                        <TextDisplay styles={{ marginBottom: 15 }} text={"Tình trạng cửa sau khi sửa"} color={appColor.textBlack} fontWeight='bold' fontSize={16}></TextDisplay>
                        <DisplayImage />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <View style={styles.footer}>
                <View style={[sty.flexRow, sty.justifyBetween, { width: "100%", marginBottom: 10 }]}>
                    <TextDisplay text={"Tạm tính: "}></TextDisplay>
                    <TextDisplay text={"6,600,000 đ"} color={appColor.textBlack} fontWeight='bold'></TextDisplay>
                </View>
                <ButtonLoadMore
                    style={{ width: "100%", borderRadius: 20, paddingHorizontal: 20 }}
                    fontText={16}
                    color='#fff' height={50}
                    onPress={() => {
                        setModalVisible(true)
                    }}
                    bgColor='#3683F7'
                    title='Thanh toán' />

            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.overlay}>

                        <View style={styles.modalView}>
                            <TextDisplay text={"Thanh toán"} fontSize={18} color={appColor.textBlack} fontWeight='bold'></TextDisplay>
                            <Image style={{ width: 212, height: 230, marginVertical: 10 }} source={{
                                uri: 'https://img.vietqr.io/image/970415-113366668888-compact.png',
                            }}></Image>
                            <TextDisplay text={"560,000đ"} fontSize={18} color={appColor.primary} fontWeight='bold'></TextDisplay>
                            <TextDisplay text={"Nội dung: Thanh toán dịch vụ"} fontSize={14}  ></TextDisplay>
                            <ButtonLoadMore
                                style={{ width: "100%", borderRadius: 20, marginTop: 15, }}

                                fontText={16}
                                color='#fff' height={50}
                                onPress={() => {
                                    downloadAndSaveQR("https://img.vietqr.io/image/970415-113366668888-compact.png")
                                }}
                                bgColor='#3683F7'
                                title='Lưu mã qr về máy' />

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}

export default DetailServiceRepare

const styles = StyleSheet.create({
    boxWhite: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        marginBottom: 15,
    },
    footer: {
        minHeight: 100,
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 25
    },
    modalView: {
        width: "85%",
        marginHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    overlay: {
        width: "100%",
        flex: 1,
        backgroundColor: 'rgba(117, 112, 112, 0.5)', // Màu xám trong suốt
        justifyContent: 'center',
        alignItems: 'center',
    },
})