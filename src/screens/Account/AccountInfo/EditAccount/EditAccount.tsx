import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FormEditAccount from './components/FormEditAccount';
import { GradientBackground, HeaderBack, DividerCustom, ButtonLoadMore, TextDisplay, InputSearch } from '../../../../components';
import sty from '../../../../themes/sty';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { updateTechnician } from '../../../../apis/technician';
import { setModalLoading, setToastNoti } from '../../../../redux/slices/commonSlice';
import { handleErrorMessage } from '../../../../utils/helpers';
import { UserAccount } from '../../../../interfaces/auth';
import { fetchProvince, setUser } from '../../../../redux/slices/authSlice';
import { useNavigation } from '@react-navigation/core';
import { Modalize } from 'react-native-modalize';
import { appColor } from '../../../../constant/appColor';
import { Province } from '../../../../components/Interface';

const EditAccount = () => {
    const insets = useSafeAreaInsets();
    const { user, province } = useAppSelector(state => state.auth);
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")
    const [cccd, setCCCD] = useState("")
    const [address, setAddress] = useState("")
    const [area, setArea] = useState("")
    const [search, setSearch] = useState("")
    const [data, setData] = useState<UserAccount | undefined>(undefined)
    const [listProvince, setListProvince] = useState<Province[]>([])
    const dispatch = useAppDispatch()
    const navigate = useNavigation<any>();
    const [check, setCheck] = useState<boolean>(true);
    const modalizeRef = useRef<Modalize>(null);
    useEffect(() => {
        if (user) {
            setName(user.full_name);
            setPhoneNumber(user.phone)
            setCCCD(user.cccd)
            setAddress(user.address)
            setData(user);
        }
    }, [user])
    useEffect(() => {
        dispatch(fetchProvince());
    }, [])
    useEffect(() => {
        setListProvince(province)
    }, [province])
    const handleSave = async () => {
        try {
            dispatch(setModalLoading(true));
            if (check == true) {
                const customdata = {
                    id: user.id,
                    address: address,
                    full_name: name,
                    cccd: cccd,
                    phone: phoneNumber,
                    avatar: user.avatar
                };
                const res = await updateTechnician(customdata)
                if (res.status == 200) {
                    dispatch(setModalLoading(false));
                    dispatch(setUser(res.data?.data));
                    navigate.goBack()
                    dispatch(
                        setToastNoti({
                            open: true,
                            title: "Cập nhật thông tin thành công",
                        }),
                    );
                }
            }
        } catch (error: any) {
            dispatch(setModalLoading(false));
            handleErrorMessage(error, undefined, error?.data?.message);
        }
    }
    const filterProvince = (value: string) => {
        setSearch(value);

        if (!value.trim()) {
            // nếu ô search trống thì hiển thị lại toàn bộ danh sách
            setListProvince(province);
            return;
        }

        const searchValue = value.toLowerCase();
        const filtered = province.filter(item =>
            (item?.name ?? '').toLowerCase().includes(searchValue)
        );

        setListProvince(filtered);
    };
    return (
        <GradientBackground >
            <HeaderBack title='Chỉnh sửa thông tin' />
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
                        <FormEditAccount
                            openSelect={() => modalizeRef.current?.open()}
                            area={area}
                            name={name}
                            setName={setName}
                            phoneNumber={phoneNumber}
                            setPhoneNumber={setPhoneNumber}
                            cccd={cccd}
                            setCCCD={setCCCD}
                            address={address}
                            setAddress={setAddress}
                            setCheck={setCheck}
                        />
                    </ScrollView>
                </TouchableOpacity>
                <DividerCustom styles={[sty.mt_12]} height={1} color={"#F4F5F8"} />
                <View style={styles.footer}>
                    <ButtonLoadMore style={{ width: "85%", borderRadius: 20, paddingHorizontal: 20 }} fontText={16} color='#fff' height={50} onPress={() => handleSave()} bgColor='#3683F7' title='Lưu' />
                </View>
            </KeyboardAvoidingView>
            <Modalize
                ref={modalizeRef}
                modalHeight={Platform.OS === 'ios' ? 550 : 550}
                overlayStyle={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                handleStyle={{ backgroundColor: "#ccc" }}
                modalStyle={{
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: "#fff",
                    paddingHorizontal: 8,
                    paddingTop: 10,
                }}
                scrollViewProps={{
                    scrollEnabled: false, //
                    showsVerticalScrollIndicator: false,
                    contentContainerStyle: { paddingBottom: insets.bottom + 160 },
                }}
            >
                <TextDisplay text={"Chọn khu vực"} color={appColor.textBlack} fontSize={16} styles={{ marginVertical: 15, marginLeft: 15 }} />
                <InputSearch
                    placeholder='Tìm kiếm khu vực'
                    style={{ flex: 1, marginBottom: 20 }}
                    onChangeText={filterProvince} value={search || ""} />
                <ScrollView
                    style={{ maxHeight: Platform.OS === 'ios' ? 400 : 400 }}

                    showsVerticalScrollIndicator={false}
                >
                    {listProvince && listProvince.length > 0 && listProvince.map(item =>
                        <TouchableOpacity
                            key={"key_" + item.code}
                            onPress={() => {
                                setArea(item.name);
                                modalizeRef.current?.close();
                            }}
                            activeOpacity={0.8}>
                            <View style={styles.option}>
                                <TextDisplay text={item.name} />
                            </View>
                        </TouchableOpacity>
                    )}
                </ScrollView>
            </Modalize>
        </GradientBackground >
    )
}

export default EditAccount

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
    },
    option: {
        marginHorizontal: 15,
        marginBottom: 8,
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#EDEFF2',
        borderRadius: 18,
    }
})