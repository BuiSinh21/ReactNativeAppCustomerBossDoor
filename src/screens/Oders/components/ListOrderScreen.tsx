import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import IMAGES from '../../../assets/images'
import { useNavigation } from '@react-navigation/native';
import { TextDisplay } from '../../../components'
import sty from '../../../themes/sty'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { setModalLoading } from '../../../redux/slices/commonSlice'
import { resetAuthState } from '../../../redux/slices/authSlice'
import { formatPrice, handleErrorMessage } from '../../../utils/helpers';
import { logoutAPI } from '../../../apis/auth';
import Tag from '../../../components/Tag';
import { appColor } from '../../../constant/appColor';
import LineRow from '../../../components/LineRow';
import { DetailOrder } from '../../../interfaces/auth';
import moment from 'moment';
import { formatPhoneNumber, listOrderServices } from '../../../common/until';
import { setOrderDetail, setOrderReportService } from '../../../redux/slices/report';
import { HOME_ROUTES, PROFILE_ROUTES, ROOT_ROUTES } from '../../../routes';

const ListOrderScreen = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigation<any>();
    const { user, userDisplay, fcmToken } = useAppSelector(state => state.auth);
    const { result } = useAppSelector(state => state.report);
    const getOrderReportDetail = (order_id: number, item: DetailOrder) => {
        const getOrder = listOrderServices(result, order_id);
        dispatch(setOrderReportService(getOrder))
        if (item.status == "hoan_thanh") {
            navigate.navigate(ROOT_ROUTES.PROFILE_STACK, {
                screen: PROFILE_ROUTES.DETAIL_ORDER,
            })
        }
        else {
            navigate.navigate(ROOT_ROUTES.HOME_STACK, {
                screen: HOME_ROUTES.SERVICE_REPARE,
            })
        }
    }

    return (
        <View>
            {userDisplay.lich_su_don_hang?.data.map((item: DetailOrder, index: number) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={0.8}
                    onPress={() => {
                        getOrderReportDetail(item.order_id, item);
                        dispatch(setOrderDetail(item));
                    }
                    }
                >
                    <View style={[styles.sectionToach]}>
                        <View style={[styles.flexRow]}>
                            <View style={[sty.flexRow]}>
                                <TextDisplay text={"Đơn hàng:"} />
                                <TextDisplay fontWeight='bold' fontSize={12} color={appColor.textBlack} text={" #" + item.order_code} />
                            </View>
                            <Tag bgColor={item.status == "hoan_thanh" ? appColor.bgGreen : appColor.bgOrange} label={item.status == "hoan_thanh" ? "Hoàn thành" : "Đang xử lý"} color={item.status == "hoan_thanh" ? appColor.textGreen : appColor.textOrange}></Tag>
                        </View>
                        <TextDisplay fontWeight='bold' lineHeight={30} fontSize={16} color={appColor.textBlack} text={'Dịch vụ sửa chữa cửa cuốn'} />

                        <View style={[sty.flexRow, sty.gap_16, sty.mt_12]}>
                            <Image source={IMAGES.ORDER.locationdefault} style={{ height: 18, width: 14 }} />
                            <View>
                                <View style={[sty.flexRow, sty.gap_16, sty.mb_8]}>
                                    <TextDisplay fontSize={15} color={appColor.textBlack} text={item.ten_khach_hang} />
                                    <TextDisplay text={formatPhoneNumber(item.so_dien_thoai)} />
                                </View>
                                <TextDisplay lineHeight={25} text={item.dia_chi} />
                            </View>
                        </View>
                        <LineRow />

                        <View style={[sty.flexRow, sty.justifyBetween]}>
                            <View style={[sty.flexRow, sty.gap_16, sty.itemsCenter]}>
                                <Image style={{ height: 16, width: 16 }} source={IMAGES.ORDER.date} />
                                <TextDisplay fontSize={13} color={appColor.textBlack} text={moment(item.order_date).format("HH:mm - DD/MM/YYYY")} />
                            </View>
                            <TextDisplay fontSize={16} fontWeight='bold' color={appColor.primary} text={formatPrice(Number(item.tong_tien)) + " đ"} />
                        </View>
                    </View>
                </TouchableOpacity>
            ))
            }
        </View >
    )
}

export default ListOrderScreen;
const styles = StyleSheet.create({
    img: {
        width: 36,
        height: 36
    },

    sectionToach: {
        backgroundColor: "#fff",
        borderWidth: 1,
        width: "100%",
        borderColor: '#EDEFF2',
        borderRadius: 15,
        padding: 15,
        paddingRight: 15,
        marginBottom: 20
    },
    flexRow: {
        width: "100%",
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        alignSelf: 'flex-start',
        marginBottom: 10
    }
})