import { View, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native'
import React, { useRef } from 'react'

import FormInputText2 from '../../../../../components/Form/FormInputText2';
import sty from '../../../../../themes/sty';
import { TextDisplay } from '../../../../../components';
import { appColor } from '../../../../../constant/appColor';
import IMAGES from '../../../../../assets/images';
import { Modalize } from 'react-native-modalize';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppSelector } from '../../../../../redux/hooks';
interface Props {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    phoneNumber: string,
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>
    cccd: string,
    setCCCD: React.Dispatch<React.SetStateAction<string>>
    address: string;
    area: string;
    setAddress: React.Dispatch<React.SetStateAction<string>>
    setCheck: React.Dispatch<React.SetStateAction<boolean>>
    openSelect: () => void;
}
const FormEditAccount = (props: Props) => {


    return (
        <View style={[sty.flex_1, styles.form]}>
            <FormInputText2
                title='Họ và tên'
                placeholder='Nhập họ và tên'
                value={props.name}
                onChange={(value: string) => props.setName(value)}
                required={true}
                setCheck={props.setCheck}
            />
            <View style={styles.dashedLine} />
            <FormInputText2
                title='Số điện thoại'
                value={props.phoneNumber}
                required={true}
                type='numeric'
                setCheck={props.setCheck}
                placeholder='Nhập số diện thoại'
                onChange={(value: string) => props.setPhoneNumber(value)}
            />
            <View style={styles.dashedLine} />
            {/* Khu vực */}
            <TextDisplay text={"Khu vực"} />
            <TouchableOpacity activeOpacity={0.8} onPress={() => props.openSelect()}>
                <View style={styles.area}>
                    <TextDisplay text={props.area || ""} color={appColor.textBlack} />
                    <Image style={{ width: 12, height: 12 }} source={IMAGES.COMMON.icon_arrow_right} />
                </View>
            </TouchableOpacity>

            <View style={styles.dashedLine} />
            <FormInputText2
                minHeight={100}
                multiline={true}
                title='Địa chỉ'
                setCheck={props.setCheck}
                required={true}
                placeholder='Nhập địa chỉ'
                value={props.address}
                onChange={(value: string) => props.setAddress(value)}
            />

        </View >
    )
}

export default FormEditAccount;
const styles = StyleSheet.create({
    dashedLine: {
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#EDEFF2',
        marginVertical: 8,
        marginBottom: 19,
        borderRadius: 1,
    },
    form: {
        backgroundColor: "#fff",
        marginTop: 10,
        paddingTop: 15,
        paddingHorizontal: 15,
        borderRadius: 20
    },
    area: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,
        marginTop: 8,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: appColor.colorBorder,
        width: '100%',
        paddingVertical: 15,
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    }
})