import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import IMAGES from '../../assets/images';
import { GradientBackground, HeaderBack, TextDisplay } from '../../components';
import sty from '../../themes/sty';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { HOME_ROUTES, ROOT_ROUTES } from '../../routes';
const ControlScreen = () => {
    const navigate = useNavigation<any>();
    return (
        <GradientBackground colors={['#1268EA', '#1268EA']}>
            <ImageBackground
                source={IMAGES.LOGIN.bg_image}
                style={[sty.flex_1]}
                resizeMode="cover"
            >
                <HeaderBack icon={IMAGES.COMMON.icon_back_login} styleText={{ color: '#fff' }} title='Điều khiển' />
                <View style={styles.logo}>
                    <Image style={{ width: 100, height: 100 }} source={IMAGES.HOME.image_logo_door}></Image>
                    <TextDisplay text={"Cửa Dương Hà"} color='#fff' fontSize={20} styles={{ marginTop: 10 }} fontWeight='bold' ></TextDisplay>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={styles.bigCircle}>
                        {/* Nút mũi tên lên */}
                        <TouchableOpacity activeOpacity={0.5} style={[styles.smallButton, styles.up]}>
                            <LinearGradient
                                colors={['#FFFFFF', "#EEF2F9"]} // màu gradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.smallButtonGradient}>
                                <Image style={{ width: 48, height: 48 }} source={IMAGES.COMMON.icon_arrow_up_bold} />
                            </LinearGradient>
                        </TouchableOpacity>
                        {/* Nút dừng */}
                        <TouchableOpacity activeOpacity={0.8} style={[styles.largeButton, styles.centerBtn]}>
                            <LinearGradient
                                colors={['#FFFFFF', "#EEF2F9"]} // màu gradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.largeButtonGradient}>
                                <Image style={{ width: 72, height: 72 }} source={IMAGES.COMMON.icon_pause} />
                            </LinearGradient>
                        </TouchableOpacity>

                        {/* Nút mũi tên xuống */}
                        <TouchableOpacity activeOpacity={0.8} style={[styles.smallButton, styles.down]}>
                            <LinearGradient
                                colors={['#FFFFFF', "#EEF2F9"]} // màu gradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.smallButtonGradient}>
                                <Image style={{ width: 48, height: 48 }} source={IMAGES.COMMON.icon_arrow_down_bold} />
                            </LinearGradient>

                        </TouchableOpacity>

                        {/* Nút mở khóa */}
                        <TouchableOpacity activeOpacity={0.8} style={[styles.smallButton, styles.left]}>
                            <LinearGradient
                                colors={['#FFFFFF', "#EEF2F9"]} // màu gradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.smallButtonGradient}>
                                <Image style={{ width: 48, height: 48 }} source={IMAGES.COMMON.icon_unlock} />
                            </LinearGradient>

                        </TouchableOpacity>

                        {/* Nút khóa */}
                        <TouchableOpacity activeOpacity={0.8} style={[styles.smallButton, styles.right]}>
                            <LinearGradient
                                colors={['#FFFFFF', "#EEF2F9"]} // màu gradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.smallButtonGradient}>
                                <Image style={{ width: 48, height: 48 }} source={IMAGES.COMMON.icon_lock} />
                            </LinearGradient>

                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.styIconFooterGroup}>
                        <View style={styles.btnselect} >
                            <Image style={{ width: 24, height: 24 }} source={IMAGES.COMMON.icon_wifi} ></Image>
                        </View>
                        <Image style={{ width: 24, height: 24 }} source={IMAGES.COMMON.ic_round_bluetooth}></Image>
                    </View>
                    <View style={styles.styIconFooter}>
                        <TouchableOpacity onPress={() => {
                            navigate.navigate(ROOT_ROUTES.HOME_STACK, {
                                screen: HOME_ROUTES.HISTORY_DEVICE,
                            });
                        }}>
                            <Image style={{ width: 24, height: 24 }} source={IMAGES.COMMON.icon_history} ></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.styIconFooter}>
                        <TouchableOpacity onPress={() => {
                            navigate.navigate(ROOT_ROUTES.HOME_STACK, {
                                screen: HOME_ROUTES.SETTING_DEVICE,
                            });
                        }}>
                            <Image style={{ width: 24, height: 24 }} source={IMAGES.COMMON.icon_setting} ></Image>
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>
        </GradientBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        display: "flex",
        width: "100%",
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: "10%",
        marginBottom: 25,
        justifyContent: 'center',
    },

    bigCircle: {
        width: 320,
        height: 320,
        borderRadius: 160,
        borderWidth: 12,
        borderColor: '#70A4F2',
        backgroundColor: '#f4f6fa',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
    },
    smallButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {
            width: 3,  // Dịch sang phải
            height: 3, // Dịch xuống dưới
        },
        elevation: 5,
    },
    largeButton: {
        width: 104,
        height: 104,
        borderRadius: 52,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {
            width: 3,  // Dịch sang phải
            height: 3, // Dịch xuống dưới
        },
        elevation: 5,
    },
    centerBtn: {
        backgroundColor: '#fff',
    },
    up: { top: 12 },
    down: { bottom: 12 },
    left: { left: 12 },
    right: { right: 12 },
    bottomRow: {
        flexDirection: 'row',
        marginTop: 50,
        gap: 20,
    },
    bottomButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    smallButtonGradient: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
    largeButtonGradient: {
        width: 104,
        height: 104,
        borderRadius: 52,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
    styIconFooterGroup: {
        borderRadius: 30,
        borderColor: '#A8C8F7',
        borderWidth: 1,
        backgroundColor: "#6CA1F2",
        paddingHorizontal: 10,
        paddingVertical: 8,
        alignItems: 'center',
        gap: 20,
        display: 'flex',
        flexDirection: "row"
    },
    styIconFooter: {
        borderRadius: 30,
        borderColor: '#A8C8F7',
        borderWidth: 1,
        backgroundColor: "#6CA1F2",
        paddingHorizontal: 25,
        paddingVertical: 8,
        alignItems: 'center',
        gap: 12,
        display: 'flex',
        flexDirection: "row"
    },
    btnselect: {
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 25

    },
    footer: {
        display: 'flex',
        flexDirection: "row",
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        marginTop: 50
    }

});

export default ControlScreen;
