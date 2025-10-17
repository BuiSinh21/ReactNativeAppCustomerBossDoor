import { View, StyleSheet, Image, Text } from 'react-native'
import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native';
import FormInputText2 from '../../../../components/Form/FormInputText2';
import { useAppDispatch } from '../../../../redux/hooks';
import sty from '../../../../themes/sty';
import { TextDisplay } from '../../../../components';
import ImagePickerComponent from '../../../../components/Image';
import { Asset } from 'react-native-image-picker';
interface Props {
    debcribe: string,
    setDebcribe: React.Dispatch<React.SetStateAction<string>>;
    photo: Asset | null,
    setPhoto: React.Dispatch<React.SetStateAction<Asset | null>>
}
const FormRequestSupport = (props: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigation<any>();
    return (
        <View style={[sty.flex_1, styles.form]}>
            <FormInputText2
                minHeight={100}
                redCheck={true}
                multiline={true}
                title='Mô tả hỗ trợ'
                required={true}
                placeholder='Nhập mô tả'
                value={props.debcribe}
                onChange={(value: string) => props.setDebcribe(value)}
            />
            <View style={styles.dashedLine} />
            <TextDisplay fontSize={14} text={"Hình ảnh"} styles={{ marginBottom: 10 }} />
            <ImagePickerComponent photo={props.photo} setPhoto={props.setPhoto} />
        </View >
    )
}

export default FormRequestSupport;
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
        borderRadius: 20,
        paddingBottom: 19,

    },
    icon: {
        padding: 15,
        display: "flex",
        backgroundColor: "#E1ECFE",
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginRight: 15,
        width: 60,
        height: 60
    }
})