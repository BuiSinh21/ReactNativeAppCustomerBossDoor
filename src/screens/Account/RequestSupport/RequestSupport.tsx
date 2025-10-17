import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GradientBackground, HeaderBack, DividerCustom, ButtonLoadMore } from '../../../components';
import sty from '../../../themes/sty';
import FormRequestSupport from './components/FormRequestSupport';
import { Asset } from 'react-native-image-picker';
import { updateTechnicianSupports } from '../../../apis/technician';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { handleErrorMessage } from '../../../utils/helpers';
import { setModalSuccess } from '../../../redux/slices/commonSlice';
import { useNavigation } from '@react-navigation/native';

const RequestSupport = () => {
    const insets = useSafeAreaInsets();
    const dispatch = useAppDispatch();
    const navigator = useNavigation();
    const [debcribe, setDebcribe] = useState("")
    const [photo, setPhoto] = useState<Asset | null>(null)
    const { user } = useAppSelector(state => state.auth);

    const updateSupport = async () => {
        if (debcribe != "")
            try {
                console.log(11111, photo);
                const res = await updateTechnicianSupports({
                    id: null,
                    customers_id: user.id,
                    error_description: debcribe,
                    image: photo ? photo.base64 : null,
                })
                if (res.status == 200) {
                    dispatch(
                        setModalSuccess({
                            open: true,
                            title: 'Yêu cầu hỗ trợ thành công.',
                        }),
                    );
                    navigator.goBack()
                }
            } catch (error) {
                handleErrorMessage(error)
            }
    }
    return (
        <GradientBackground >
            <HeaderBack title='Yêu cầu hỗ trợ' />
            <KeyboardAvoidingView
                style={[sty.flex_1, { backgroundColor: "#F4F5F8" }]}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableOpacity
                    style={sty.flex_1}
                    activeOpacity={1}
                    onPress={Keyboard.dismiss}>
                    <ScrollView
                        contentContainerStyle={[
                            sty.p_16,
                            sty.gap_24,
                            { paddingBottom: insets.bottom + 16 },
                        ]}
                        showsVerticalScrollIndicator={false}>
                        <FormRequestSupport photo={photo} setPhoto={setPhoto} debcribe={debcribe} setDebcribe={setDebcribe} />
                    </ScrollView>
                </TouchableOpacity>
                <DividerCustom styles={[sty.mt_12]} height={1} color={"#F4F5F8"} />
                <View style={styles.footer}>
                    <ButtonLoadMore style={{ width: "85%", borderRadius: 20, paddingHorizontal: 20 }} fontText={16} color='#fff' height={50} onPress={() => updateSupport()} bgColor='#3683F7' title='Gửi yêu cầu' />
                </View>
            </KeyboardAvoidingView>
        </GradientBackground>
    )
}

export default RequestSupport

const styles = StyleSheet.create({
    Avatar: {
        width: 56,
        height: 56,
        objectFit: 'cover',
        borderWidth: 2,
        borderColor: '#1354D4',
        borderRadius: 9999,
    },
    bg_white: {
        backgroundColor: "#fff"
    },
    footer: {
        minHeight: 100,
        width: "100%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
    }
})