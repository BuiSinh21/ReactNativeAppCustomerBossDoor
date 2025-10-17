import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native';
import FormPassword from '../../../../../components/Form/FormPassword';
import { useAppDispatch } from '../../../../../redux/hooks';
import sty from '../../../../../themes/sty';

interface Props {
    oldPassword: string,
    newPassword: string,
    rePassword: string,
    setOldPassword: React.Dispatch<React.SetStateAction<string>>;
    setNewPassword: React.Dispatch<React.SetStateAction<string>>;
    setRepassword: React.Dispatch<React.SetStateAction<string>>;

}

const FormChangePassword = (props: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigation<any>();
   

    return (
        <View style={[sty.flex_1, styles.form]}>
            <FormPassword
                title='Mật khẩu cũ'
                isPassword={true}
                placeholder='Nhập mật khẩu cũ'
                value={props.oldPassword}
                onChange={(value: string) => props.setOldPassword(value)}
                required={true}
            />
            <View style={styles.dashedLine} />
            <FormPassword
                title='Mật khẩu mới'
                isPassword={true}
                placeholder='Nhập mật khẩu mới'
                value={props.newPassword}
                onChange={(value: string) => props.setNewPassword(value)}
                required={true}
            />
            <View style={styles.dashedLine} />
            <FormPassword
                title='Nhập lại mật khẩu mới'
                isPassword={true}
                placeholder='Nhập lại mật khẩu mới'
                value={props.rePassword}
                onChange={(value: string) => props.setRepassword(value)}
                required={true}
            />
        </View >
    )
}

export default FormChangePassword;
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
    }
})