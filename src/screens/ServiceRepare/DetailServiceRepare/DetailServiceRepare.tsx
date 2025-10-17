import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ButtonLoadMore, HeaderBack, TextDisplay } from '../../../components'
import sty from '../../../themes/sty'
import { useNavigation } from '@react-navigation/native'
import { appColor } from '../../../constant/appColor'
import IMAGES from '../../../assets/images'
import { useAppSelector } from '../../../redux/hooks'
import { formatPhoneNumber } from '../../../common/until'

const DetailServiceRepare = () => {
    const navigate = useNavigation<any>();
    const { user, geolocation } = useAppSelector((state) => state.auth);

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
                        <TextDisplay text={"Thông tin khách hàng"} color={appColor.textBlack} fontSize={16} styles={{ fontWeight: "700" }} />
                        <View>
                            <View>
                                <View>
                                    <Image style={{ width: 44, height: 44 }} source={IMAGES.PROFILE.avatar_default} />
                                    <View>
                                        <TextDisplay text={"Lê Đức B"} color={appColor.textBlack} fontSize={14} styles={{ fontWeight: "600" }} />
                                        <TextDisplay text={formatPhoneNumber("0951543252")} fontSize={14}  />
                                    </View>
                                </View>
                                <View>

                                </View>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <View style={styles.footer}>
                <ButtonLoadMore
                    style={{ width: "85%", borderRadius: 20, paddingHorizontal: 20 }}
                    fontText={16}
                    color='#fff' height={50}
                    onPress={() => {

                    }}
                    bgColor='#3683F7'
                    title='Thanh toán' />
            </View>
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
    }
})