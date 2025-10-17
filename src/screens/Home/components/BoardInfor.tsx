import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import IMAGES from '../../../assets/images'
import sty from '../../../themes/sty'
import { GradientBackground, TextDisplay } from '../../../components'
import { appColor } from '../../../constant/appColor'

const BoardInfor = () => {
    return (
        <View style={styles.background}>
            <ImageBackground
                source={IMAGES.ACCOUNT.bgBoard}
                style={sty.flex_1}
                resizeMode="cover"
            >
                <View style={[sty.pt_16, sty.pb_16, sty.px_16,]}>
                    <View style={styles.divName}>
                        <Image source={IMAGES.ACCOUNT.account_img} style={styles.image} />
                        <TextDisplay text={"Nguyễn văn A"} color='#3683F7' />
                    </View>
                    <View style={[sty.flexRow, sty.justifyBetween, sty.itemsCenter]}>
                        <TextDisplay styles={[sty.pb_8, sty.pt_12]} text={"Số đơn hoàn thành"} color='#fff' />
                        <View style={[sty.flexRow, sty.justifyBetween,sty.gap_4, sty.itemsCenter]}>
                            <Image style={{ width: 16, height: 16 }} source={IMAGES.ACCOUNT.locationWhite} />
                            <TextDisplay styles={[sty.pb_8, sty.pt_12]} text={"Hà Nội"} color='#fff' />
                        </View>
                    </View>
                    <View style={[sty.flexRow, sty.mt_12]}>
                        <View style={{ flex: 1 }}>
                            <Image source={IMAGES.ACCOUNT.order_completed} style={styles.imageBoard} />
                            <TextDisplay styles={[sty.pb_8, sty.pt_12]} text={"Số đơn hoàn thành"} color='#fff' />
                            <TextDisplay fontWeight='semibold' fontSize={18} text={"60"} color='#fff' />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image source={IMAGES.ACCOUNT.revenue_img} style={styles.imageBoard} />
                            <TextDisplay styles={[sty.pb_8, sty.pt_12]} text={"Doanh thu"} color='#fff' />
                            <TextDisplay fontWeight='semibold' fontSize={18} text={"25,000,000"} color='#fff' />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default BoardInfor;

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#3683F7",
        borderRadius: 25,
        // paddingHorizontal: 20,
        // paddingVertical: 10
    },
    image: {
        height: 18,
        width: 18,
        marginRight: 5
    },
    imageBoard: {
        height: 48,
        width: 48,
    },
    divName: {
        width: "50%",
        padding: 7,
        backgroundColor: "#fff",
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        alignSelf: 'flex-start',
    },
    textsty: {
        color: appColor.textBlack,
        fontWeight: 700
    },

});