import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Image,
    StyleProp,
    StyleSheet,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import sty from '../../../themes/sty';
import { InputSearch, TextDisplay } from '../../../components';
import IMAGES from '../../../assets/images';

interface HeaderBackProps {
    title: string;
    subTitle?: string;
    RightIcon?: any;
    style?: StyleProp<ViewStyle>;
    icon?: any;
    styleText?: StyleProp<TextStyle>;
    onPressBack?: () => void;
    value?: string;
    setValue?: any;
    openFilter: () => void;
}
const HeaderSearch = ({
    title,
    style,
    RightIcon,
    subTitle,
    styleText,
    setValue,
    value,
    openFilter,
    icon, onPressBack
}: HeaderBackProps) => {
    const navigate = useNavigation<any>();
    const insets = useSafeAreaInsets();
    const onPress = () => {
        if (!!onPressBack) {
            return onPressBack();
        }
    }
    return (
        <View style={[styles.HeaderBack, { paddingTop: insets.top }, style]}>
            <View style={[sty.flexRow, sty.itemsCenter]} >
                <TouchableOpacity
                    activeOpacity={1}
                    style={sty.p_16}
                    onPress={() => {
                        navigate.goBack();
                        onPress();
                    }}>
                    <Image
                        style={[sty.w_30, sty.h_30, sty.objectScaleDown]}
                        source={icon ? icon : IMAGES.COMMON.icon_arrow_left}
                    />
                </TouchableOpacity>
                <TextDisplay
                    text={title || ''}
                    fontSize={18}
                    styles={styleText}
                    lineHeight={24}
                    color="#181D27"
                    fontWeight="bold"
                />
                {!!subTitle && <TextDisplay text={subTitle} color="#52585F" />}
                {RightIcon && <View style={sty.pl_12}>{RightIcon}</View>}
            </View>

            <View style={[sty.flexRow, sty.itemsCenter]} >
                <InputSearch style={{ flex: 2 }} onChangeText={setValue} value={value || ""} />
                <TouchableOpacity activeOpacity={0.8} onPress={() => openFilter()}>
                    <View style={styles.filter}>
                        <Image source={IMAGES.COMMON.icon_filter_2} style={{ width: 22, height: 22 }} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HeaderSearch;

const styles = StyleSheet.create({
    HeaderBack: {
        backgroundColor: "#fff",
        paddingRight: 16,
        flexDirection: 'column',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        paddingBottom: 15
        // elevation: 4,
    },
    filter: {
        padding: 13,
        borderRadius: 15,
        borderColor: '#C3CAD7',
        borderWidth: 1
    }
});
