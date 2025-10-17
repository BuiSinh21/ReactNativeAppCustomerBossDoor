import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import sty from '../../../themes/sty';
import { Text } from 'react-native-svg';
import { appColor } from '../../../constant/appColor';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IMAGES_FORM from '../../../assets/images/FORM';
import { TextDisplay } from '../../../components';
interface Props {
    text: string
}
const Header = (props: Props) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.HeaderBack, { paddingTop: insets.top }]}>
            <View style={[sty.shrink_1, sty.grow_1] }>
                <TextDisplay
                    text={props?.text}
                    fontSize={20}
                    
                    lineHeight={24}
                    styles={[sty.text_center,sty.pt_12]}
                    color="#181D27"
                    fontWeight="semibold"
                />
            </View>
        </View>)
}
export default Header;

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#FFF",
        boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"
    },
    textsty: {
        color: appColor.textBlack,
        fontWeight: 700
    },
    HeaderBack: {
        paddingRight: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
