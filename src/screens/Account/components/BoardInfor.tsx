import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import IMAGES from '../../../assets/images'
import sty from '../../../themes/sty'
import { GradientBackground, TextDisplay } from '../../../components'
import { appColor } from '../../../constant/appColor'
import { useAppSelector } from '../../../redux/hooks'
import { formatPrice } from '../../../utils/helpers'

const BoardInfor = () => {
    const { user, userDisplay } = useAppSelector(state => state.auth);
    console.log(1111,userDisplay);
    
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
                        <TextDisplay text={user?.full_name} color='#3683F7' />
                    </View>
                    <View style={[sty.flexRow, sty.justifyBetween, sty.itemsCenter]}>
                        <TextDisplay styles={[sty.pb_8, sty.flex_1, sty.pt_12]} text={userDisplay?.technician?.profile?.education_text} color='#fff' />
                        <View style={[sty.flexRow, sty.justifyEnd, sty.flex_1, sty.gap_4, sty.itemsCenter]}>
                            <Image style={{ width: 16, height: 16 }} source={IMAGES.ACCOUNT.locationWhite} />
                            <TextDisplay styles={[sty.pb_8, sty.pt_12]} text={user?.address} color='#fff' />
                        </View>
                    </View>
                    <View style={[sty.flexRow, sty.mt_12]}>
                        <View style={{ flex: 1 }}>
                            <Image source={IMAGES.ACCOUNT.order_completed} style={styles.imageBoard} />
                            <TextDisplay styles={[sty.pb_8, sty.pt_12]} text={"Số đơn hoàn thành"} color='#fff' />
                            <TextDisplay fontWeight='semibold' fontSize={18} text={userDisplay?.lich_su_don_hang?.data?.filter(item=> item.status=="hoan_thanh")?.length || 0} color='#fff' />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image source={IMAGES.ACCOUNT.revenue_img} style={styles.imageBoard} />
                            <TextDisplay styles={[sty.pb_8, sty.pt_12]} text={"Doanh thu"} color='#fff' />
                            <TextDisplay fontWeight='semibold' fontSize={18} text={formatPrice((Number(userDisplay?.thong_ke_doanh_thu?.summary?.tong_doanh_thu)) || 0)} color='#fff' />
                        </View>
                    </View>
                </View>
            </ImageBackground >
        </View >
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