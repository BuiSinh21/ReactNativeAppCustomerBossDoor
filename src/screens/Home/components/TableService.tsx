import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { TextDisplay } from '../../../components';
import IMAGES from '../../../assets/images';
import { formatPrice } from '../../../utils/helpers';
interface Props {
    title: string;
    array?: any[];
}
const TableService = (props: Props) => {
    const [isOpen, setIsOpen] = useState(true);
    const DATA = [
        {
            title: 'Thay motor cửa cuốn',
            unit: "Bộ",
            amount: 4200000
        },
        {
            title: 'Thay hộp điều khiển + remote',
            unit: "Bộ",
            amount: 4200000


        },
        {
            title: 'Sửa mạch điều khiển(bo mạch)',
            unit: "Lần",
            amount: 4200000
        },
    ];
    const renderItem = ({ item, index }: any) => (
        <View style={styles.row}>
            <View style={[styles.cell, styles.center, { width: '10%' }]}>
                <Text style={styles.text}>{index}</Text>
            </View>
            <View style={[styles.cell, { width: '45%' }]}>
                <Text style={styles.text}>{item.title}</Text>
            </View>
            <View style={[styles.cell, styles.center, { width: '15%' }]}>
                <Text style={styles.text}>{item.unit}</Text>
            </View>
            <View style={[styles.cell, { width: '30%' }]}>
                <Text key={index} style={[styles.priceText]}>
                    {formatPrice(item.amount)}đ
                </Text>
            </View>
        </View>
    );
    return (
        <View style={{ backgroundColor: "#fff" }}>
            <TouchableOpacity activeOpacity={0.8}
                onPress={() => { setIsOpen(!isOpen) }}
            >
                <View style={styles.container}>
                    <TextDisplay fontWeight='bold' text={props.title} color='#fff' />
                    <Image style={{ width: 20, height: 20 }} source={IMAGES.COMMON.icon_arrow_down}></Image>
                </View>
            </TouchableOpacity>
            {
                isOpen &&
                <>
                    <View style={[styles.row, styles.header]}>
                        <TextDisplay text={"STT"} styles={[styles.headerText, { width: '10%', textAlign: 'center' }]}>

                        </TextDisplay>
                        <TextDisplay text={"Tên dịch vụ"} styles={[styles.headerText, { width: '45%' }]}></TextDisplay>
                        <TextDisplay text={"ĐVT"} styles={[styles.headerText, { width: '15%', textAlign: 'center' }]}>

                        </TextDisplay>
                        <TextDisplay text={"Đơn giá"} styles={[styles.headerText, { width: '30%', textAlign: 'right', paddingRight: 8 }]}></TextDisplay>
                    </View>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.title}
                    />
                </>
            }
        </View>
    )
}

export default TableService
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 6,
        justifyContent: "space-between",
        backgroundColor: '#3683F7'
    },
    headerText: {
        fontWeight: '600',
        color: '#000',
        fontSize: 14,
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#e5e5e5',
        paddingVertical: 8,
    },
    header: {
        backgroundColor: '#E5E8F1',
        borderTopWidth: 1,
        borderColor: '#e5e5e5',
        paddingVertical: 10,
    },
    cell: {
        justifyContent: 'center',
        paddingHorizontal: 6,
    },
    center: {
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        lineHeight:20,
        fontWeight: 500,
        color: '#181D27',
    },
    priceText: {
        color: '#0077FF',
        fontWeight: '600',
        textAlign: 'right',
        fontSize: 14,
    },
});