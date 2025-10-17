import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import { DividerCustom, GradientBackground } from '../../../components';
import HeaderDetailOrder from './components/HeaderDetailOrder';
import sty from '../../../themes/sty';
import InformationDetail from './components/InformationDetail';

const DetailOrdersScreen = () => {
    const insets = useSafeAreaInsets();
    const navigate = useNavigation<any>();

    return (
        <GradientBackground>
            <HeaderDetailOrder title='Thông tin đơn hàng' />
            <DividerCustom styles={sty.mt_12} />
            <KeyboardAvoidingView
                style={[sty.flex_1]}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView
                    style={[sty.flex_1, { backgroundColor: "#FAFBFC" }]}
                    contentContainerStyle={[
                        sty.p_16,
                        sty.gap_24,
                        { paddingBottom: insets.bottom + 16 },
                    ]}
                    showsVerticalScrollIndicator={false}>
                    <InformationDetail />
                </ScrollView>
            </KeyboardAvoidingView>

        </GradientBackground>
    )
}

export default DetailOrdersScreen