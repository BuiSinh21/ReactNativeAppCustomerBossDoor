import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Header from './components/Header'
import { DividerCustom, GradientBackground } from '../../components';
import sty from '../../themes/sty';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import ListOrderScreen from './components/ListOrderScreen';

const OrdersScreen = () => {
    const insets = useSafeAreaInsets();
    const navigate = useNavigation<any>();

    return (
        <GradientBackground>
            <Header text='Đơn hàng' />
            <DividerCustom styles={sty.mt_12} />
            <KeyboardAvoidingView
                style={[sty.flex_1]}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableOpacity
                    style={[sty.flex_1,{backgroundColor:"#FAFBFC"}]}
                    activeOpacity={1}
                    onPress={Keyboard.dismiss}>
                    <ScrollView
                        contentContainerStyle={[
                            sty.p_16,
                            sty.gap_24,
                            { paddingBottom: insets.bottom + 16 },
                        ]}
                        showsVerticalScrollIndicator={false}>
                        <ListOrderScreen />
                    </ScrollView>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </GradientBackground>
    )
}

export default OrdersScreen