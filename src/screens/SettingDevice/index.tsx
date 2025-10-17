import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { DividerCustom, HeaderBack, TextDisplay } from '../../components'
import sty from '../../themes/sty'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { appColor } from '../../constant/appColor'
import IMAGES from '../../assets/images'
import { IconArrowRight } from '../../components/Icons'
import { Modalize } from 'react-native-modalize';
import { Picker as WheelPicker } from 'react-native-wheel-pick';
import { useNavigation } from '@react-navigation/native'
import { HOME_ROUTES, ROOT_ROUTES } from '../../routes'
const SettingDevice = () => {
    const insets = useSafeAreaInsets();
    const [isEnabled, setIsEnabled] = useState(false);
    const [isNotifi, setIsNotifi] = useState(false);
    const modalizeRef = useRef<Modalize>(null);
    const navigate = useNavigation<any>();
    const [hour, setHour] = useState<number>(0);
    const [minute, setMinute] = useState<number>(0);
    const [hourSelect, setHourSelect] = useState<number>(0)
    const [minutesSelect, setMinutesSelect] = useState<number>(0)
    const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
    const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));
    const onOpenTime = () => {
        modalizeRef.current?.open();
    };
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <HeaderBack title='Cài đặt thiết bị' />
            <DividerCustom color='#EEEFF2' styles={[sty.mt_12, sty.h_16]} />
            <ScrollView
                contentContainerStyle={[
                    sty.p_12,
                    {
                        paddingBottom: insets.bottom + 16
                    },
                ]}
                showsVerticalScrollIndicator={false}>
                <TextDisplay styles={sty.pb_4} text={"Cảnh báo"} color={appColor.textBlack} fontWeight='bold' fontSize={14} />
                {/* Cảnh báo */}
                <View style={[styles.boxRequest]}>
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => { }}>
                        <View style={[sty.flexRow, styles.request]}>
                            <View style={[sty.flexRow, styles.divName]}>
                                <Image style={[styles.img, sty.mr_12]} source={IMAGES.SETTING.icon_clock} />
                                <TextDisplay fontSize={14} fontWeight='bold' text={"Hẹn giờ khóa điều khiển"} color="#444A55" />
                            </View>
                            <View>
                                <IconArrowRight />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <DividerCustom />
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => { }}>
                        <View style={[sty.flexRow, styles.request]}>
                            <View style={[sty.flexRow, styles.divName]}>
                                <Image style={[styles.img, sty.mr_12]} source={IMAGES.SETTING.icon_toach} />
                                <TextDisplay fontSize={14} fontWeight='bold' text={"Cảm biến chạm dừng"} color="#444A55" />
                            </View>
                            <View>
                                <IconArrowRight />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <DividerCustom />
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => { }}>
                        <View style={[sty.flexRow, styles.request]}>
                            <View style={[sty.flexRow, styles.divName]}>
                                <Image style={[styles.img, sty.mr_12]} source={IMAGES.SETTING.icon_fire} />
                                <TextDisplay fontSize={14} fontWeight='bold' text={"Báo cháy"} color="#444A55" />
                            </View>
                            <View>
                                <IconArrowRight />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <DividerCustom />
                    <View style={[sty.flexRow, styles.request]}>
                        <View style={[sty.flexRow, styles.divName]}>
                            <Image style={[styles.img, sty.mr_12]} source={IMAGES.SETTING.icon_warning} />
                            <TextDisplay fontSize={14} fontWeight='bold' text={"Nhắc đóng cửa"} color="#444A55" />
                        </View>
                        <View style={[sty.flexRow, sty.itemsCenter, sty.gap_8]}>
                            {isEnabled &&
                                <TouchableOpacity style={[sty.flexRow, sty.itemsCenter]} activeOpacity={0.8} onPress={() => onOpenTime()}>
                                    <Image style={[styles.img, sty.mr_8, { width: 12, height: 12 }]} source={IMAGES.SETTING.icon_clock_primary} />
                                    <TextDisplay text={`${hour} : ${minute}`} color={appColor.primary} fontWeight='bold' />
                                </TouchableOpacity>
                            }
                            <Switch
                                trackColor={{ false: '#767577', true: appColor.primary }}
                                thumbColor={'#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setIsEnabled(!isEnabled)}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                    <DividerCustom />
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => { }}>
                        <View style={[sty.flexRow, styles.request]}>
                            <View style={[sty.flexRow, styles.divName]}>
                                <Image style={[styles.img, sty.mr_12]} source={IMAGES.SETTING.icon_bell} />
                                <TextDisplay fontSize={14} fontWeight='bold' text={"Bật thông báo"} color="#444A55" />
                            </View>
                            <View>
                                <Switch
                                    trackColor={{ false: '#767577', true: appColor.primary }}
                                    thumbColor={'#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={() => setIsNotifi(!isNotifi)}
                                    value={isNotifi}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <TextDisplay styles={[sty.pb_4, sty.pt_12]} text={"Cài đặt chung"} color={appColor.textBlack} fontWeight='bold' fontSize={14} />
                {/* Cài đặt chung */}
                <View style={[styles.boxRequest]}>
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => { }}>
                        <View style={[sty.flexRow, styles.request]}>
                            <View style={[sty.flexRow, styles.divName]}>
                                <Image style={[styles.img, sty.mr_12]} source={IMAGES.SETTING.icon_toach} />
                                <TextDisplay fontSize={14} fontWeight='bold' text={"Hành trình cửa"} color="#444A55" />
                            </View>
                            <View>
                                <IconArrowRight />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <DividerCustom />
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => { }}>
                        <View style={[sty.flexRow, styles.request]}>
                            <View style={[sty.flexRow, styles.divName]}>
                                <Image style={[styles.img, sty.mr_12]} source={IMAGES.SETTING.icon_reload} />
                                <TextDisplay fontSize={14} fontWeight='bold' text={"Chiều quay động cơ"} color="#444A55" />
                            </View>
                            <View style={[sty.flexRow, sty.itemsCenter, sty.gap_8]}>
                                <TextDisplay fontSize={14} fontWeight='bold' text={"Thuận"} color="#444A55" />
                                <IconArrowRight />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <DividerCustom />
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => { }}>
                        <View style={[sty.flexRow, styles.request]}>
                            <View style={[sty.flexRow, styles.divName]}>
                                <Image style={[styles.img, sty.mr_12]} source={IMAGES.SETTING.icon_link_share} />
                                <TextDisplay fontSize={14} fontWeight='bold' text={"Chia sẻ quyền truy cập"} color="#444A55" />
                            </View>
                            <View>
                                <IconArrowRight />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <DividerCustom />
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => { }}>
                        <View style={[sty.flexRow, styles.request]}>
                            <View style={[sty.flexRow, styles.divName]}>
                                <Image style={[styles.img, sty.mr_12]} source={IMAGES.SETTING.icon_wifi} />
                                <TextDisplay fontSize={14} fontWeight='bold' text={"Cài đặt wifi"} color="#444A55" />
                            </View>
                            <View>
                                <IconArrowRight />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <DividerCustom />
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => { }}>
                        <View style={[sty.flexRow, styles.request]}>
                            <View style={[sty.flexRow, styles.divName]}>
                                <Image style={[styles.img, sty.mr_12]} source={IMAGES.SETTING.icon_bell} />
                                <TextDisplay fontSize={14} fontWeight='bold' text={"Tích hợp camera"} color="#444A55" />
                            </View>
                            <View>
                                <IconArrowRight />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <DividerCustom />
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => {
                            navigate.navigate(ROOT_ROUTES.HOME_STACK, {
                                screen: HOME_ROUTES.LIST_USER,
                            });
                        }}>
                        <View style={[sty.flexRow, styles.request]}>
                            <View style={[sty.flexRow, styles.divName]}>
                                <Image style={[styles.img, sty.mr_12]} source={IMAGES.SETTING.icon_group_user} />
                                <TextDisplay fontSize={14} fontWeight='bold' text={"Danh sách người dùng"} color="#444A55" />
                            </View>
                            <View>
                                <IconArrowRight />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <DividerCustom />
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => { }}>
                        <View style={[sty.flexRow, styles.request]}>
                            <View style={[sty.flexRow, styles.divName]}>
                                <Image style={[styles.img, sty.mr_12]} source={IMAGES.SETTING.icon_remote} />
                                <TextDisplay fontSize={14} fontWeight='bold' text={"Tay cần RF"} color="#444A55" />
                            </View>
                            <View>
                                <IconArrowRight />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Modalize
                ref={modalizeRef}
                modalHeight={400}

                overlayStyle={{ backgroundColor: "rgba(0,0,0,0.3)" }} // nền sau trong suốt
                handleStyle={{ backgroundColor: "#ccc" }}        // chỉnh màu thanh kéo nếu muốn
                modalStyle={{ borderTopLeftRadius: 20, backgroundColor: "#ffff", borderTopRightRadius: 20 }}
            >
                <View style={{ height: "100%" }}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Chọn giờ nhắc đóng cửa</Text>

                        <View style={styles.pickerContainer}>
                            <WheelPicker
                                selectedValue={hour.toString().padStart(2, '0')}
                                pickerData={hours}
                                style={styles.wheel}
                                onValueChange={(val: any) => setHourSelect(Number(val))}
                            />
                            <Text style={styles.colon}>:</Text>
                            <WheelPicker
                                selectedValue={minute.toString().padStart(2, '0')}
                                pickerData={minutes}
                                style={styles.wheel}
                                onValueChange={(val: any) => setMinutesSelect(Number(val))}
                            />
                        </View>

                        {/* Nút áp dụng */}
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                setHour(hourSelect); setMinute(minutesSelect)
                                modalizeRef.current?.close();
                            }}
                        >
                            <Text style={styles.buttonText}>Áp dụng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modalize >
        </View >
    )
}

export default SettingDevice

const styles = StyleSheet.create({
    img: {
        width: 20,
        height: 20
    },
    divName: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
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
    container: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker: {
        width: 100,
        height: 150,
    },
    itemStyle: {
        fontSize: 22,
        color: '#3683f7',
    },
    colon: {
        fontSize: 24,
        marginHorizontal: 10,
        color: '#000',
    },
    button: {
        backgroundColor: '#3683f7',
        marginTop: 10,
        marginHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    wheel: {
        width: 100,
        backgroundColor: "#fff",
    },
})    