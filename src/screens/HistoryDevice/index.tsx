import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DividerCustom, HeaderBack, TextDisplay } from '../../components'
import sty from '../../themes/sty'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { appColor } from '../../constant/appColor'

const HistoryDevice = () => {
    const insets = useSafeAreaInsets();
    const array = [
        {
            date: "06:45 - 14/07/2025",
            title: "Cửa đóng",
            user: 'User1'
        },
        {
            date: "06:45 - 14/07/2025",
            title: "Cửa đóng",
            user: 'User1'
        },
        {
            date: "06:45 - 14/07/2025",
            title: "Cửa đóng",
            user: 'User1'
        },
        {
            date: "06:45 - 14/07/2025",
            title: "Cửa đóng",
            user: 'User1'
        },
        {
            date: "06:45 - 14/07/2025",
            title: "Cửa đóng",
            user: 'User1'
        },
    ]
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <HeaderBack title='Lịch sử thiết bị' />
            <DividerCustom color='#EEEFF2' styles={[sty.mt_12, sty.h_16]} />
            <ScrollView
                contentContainerStyle={[
                    {
                        paddingBottom: insets.bottom + 16
                    },
                ]}
                showsVerticalScrollIndicator={false}>
                {array.map((item,index) =>
                    <View style={styles.itemBox} key={index}>
                        <TextDisplay text={item.date} styles={{marginBottom:10}} color={appColor.textGray} fontSize={14} />
                        <View style={[sty.flexRow, sty.justifyBetween]}>
                            <TextDisplay text={item.title} color={appColor.textBlack} fontSize={16} />
                            <TextDisplay text={item.user} color={appColor.primary} fontSize={16} fontWeight='bold' />
                        </View>
                    </View>)}
            </ScrollView>
        </View>
    )
}

export default HistoryDevice

const styles = StyleSheet.create({
    itemBox: {
        backgroundColor:'#FAFBFC',
        padding:15,
        marginTop:15,
        borderRadius:15,
        marginHorizontal: 20,
        borderColor: "#EDEFF2",
        borderWidth: 1
    }
})    