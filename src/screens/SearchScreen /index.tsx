import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import sty from '../../themes/sty'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TableService from '../Home/components/TableService';
import HeaderSearch from './components/HeaderSearch';
import { Modalize } from 'react-native-modalize';
import { useAppDispatch } from '../../redux/hooks';
import { setIsFilter } from '../../redux/slices/authSlice';
import IMAGES from '../../assets/images';
import { TextDisplay } from '../../components';
import { appColor } from '../../constant/appColor';
const SearchScreen = () => {
    const insets = useSafeAreaInsets();
    const modalizeRef = useRef<Modalize>(null);
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState(false); // trạng thái local
    const [filters, setFilters] = useState({
        fix: false,
        maintain: false,
        upgrade: true,
        replace: false,
    });
    const toggleFilter = (key: keyof typeof filters) => {
        setFilters({ ...filters, [key]: !filters[key] });
    };
    useEffect(() => {
        dispatch(setIsFilter(isOpen));
    }, [isOpen]);
    const arr = [
        { key: "fix", label: "Sửa chữa cửa cuốn" },
        { key: "maintain", label: "Bảo trì & bảo dưỡng định kỳ" },
        { key: "upgrade", label: "Dịch vụ khẩn cấp & nâng cấp" },
        { key: "replace", label: "Thay sthế linh kiện" },
    ]
    return (
        <View>
            <HeaderSearch openFilter={() => {
                modalizeRef.current?.open()
            }
            } title='Tìm kiếm' />
            <ScrollView
                contentContainerStyle={[
                    sty.pt_16,
                    { paddingBottom: insets.bottom + 160 },
                ]}
                showsVerticalScrollIndicator={false}>
                <KeyboardAvoidingView
                    style={sty.flex_1}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                    <TableService title="Sửa chữa cửa cuốn" />
                    <TableService title="Bảo trì và bảo dưỡng định kỳ" />
                    <TableService title="Dịch vụ khẩn cấp & nâng cấp" />
                </KeyboardAvoidingView>
            </ScrollView>
            <Modalize
                ref={modalizeRef}
                modalHeight={Platform.OS === 'ios' ? (arr.length > 4 ? 600 : 550) : 450}
                overlayStyle={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                handleStyle={{ backgroundColor: "#ccc" }}

                modalStyle={{
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: "#fff",
                    paddingHorizontal: 16,
                    paddingTop: 10,
                }}
                scrollViewProps={{
                    scrollEnabled: false, //
                    showsVerticalScrollIndicator: false,
                    contentContainerStyle: { paddingBottom: insets.bottom + 160 },
                }}
                onOpen={() => setIsOpen(true)}
                onClose={() => setIsOpen(false)}
            >

                <View style={styles.header}>
                    <View style={[
                        sty.flexRow,
                        sty.gap_8
                    ]}>
                        <Image style={{ width: 20, height: 20 }} source={IMAGES.COMMON.icon_filter_2} />
                        <TextDisplay text={"Bộ lọc"} color={appColor.textBlack} fontSize={16} fontWeight='bold' />
                    </View>
                    <TouchableOpacity onPress={() => setFilters({
                        fix: false,
                        maintain: false,
                        upgrade: false,
                        replace: false
                    })}>
                        <Text style={styles.reset}>Đặt lại bộ lọc</Text>
                    </TouchableOpacity>
                </View>

                {/* Nhóm dịch vụ */}
                <Text style={styles.groupTitle}>Nhóm dịch vụ</Text>

                {/* Các checkbox */}
                <ScrollView
                    style={{ maxHeight: Platform.OS === 'ios' ? 250 : 300 }}

                    showsVerticalScrollIndicator={false}>

                    <View style={{ marginTop: 10 }}>
                        {arr.map((item) => (
                            <TouchableOpacity
                                key={item.key}
                                style={filters[item.key as keyof typeof filters] ? styles.optionSelect : styles.option}
                                onPress={() => toggleFilter(item.key as keyof typeof filters)}
                                activeOpacity={0.7}
                            >
                                <View
                                    style={[
                                        styles.checkbox,
                                        filters[item.key as keyof typeof filters] && styles.checkboxActive,
                                    ]}
                                >
                                    {filters[item.key as keyof typeof filters] && (
                                        <Text style={styles.checkIcon}>✓</Text>
                                    )}
                                </View>
                                <Text style={filters[item.key as keyof typeof filters] ? styles.optionTextSelect : styles.optionText}>{item.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
                {/* Nút áp dụng */}
                <TouchableOpacity style={styles.btnApply}>
                    <Text style={styles.btnApplyText}>Áp dụng</Text>
                </TouchableOpacity>
            </Modalize>
        </View >

    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    buttonOpen: {
        backgroundColor: "#3683f7",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    textOpen: { color: "#fff", fontWeight: "600" },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 4,
    },
    title: { fontSize: 18, fontWeight: "700", color: "#000" },
    reset: { color: "#3683f7", fontSize: 14, fontWeight: 700, textDecorationLine: 'underline' },
    groupTitle: { marginTop: 12, fontWeight: "600", fontSize: 14, lineHeight: 30, color: "#333" },

    option: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#F4F5F8',
        padding: 7,
        borderRadius: 8,
        marginVertical: 6,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    checkboxActive: {
        backgroundColor: "#3683F7",
        borderColor: "#3683f7",
    },
    checkIcon: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "700",
    },
    optionText: { fontSize: 15, color: "#000" },

    btnApply: {
        backgroundColor: "#3683f7",
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: "center",
        marginTop: 20,
        marginBottom: 30,
    },
    btnApplyText: { color: "#fff", fontSize: 16, fontWeight: "700" },
    optionSelect: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#fff',
        borderColor: appColor.primary,
        borderWidth: 1,
        padding: 7,
        borderRadius: 8,
        marginVertical: 6,
    },
    optionTextSelect: {
        fontSize: 15,
        color: appColor.primary,
        fontWeight:600,

    }
})    