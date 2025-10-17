import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FormEditAccount from './components/FormSupport';
import { GradientBackground, HeaderBack } from '../../components';
import sty from '../../themes/sty';

const Support = () => {
    const insets = useSafeAreaInsets();

    return (
        <GradientBackground >
            <HeaderBack title='Hỗ trợ' />
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
                        <FormEditAccount />
                    </ScrollView>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </GradientBackground>
    )
}

export default Support

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