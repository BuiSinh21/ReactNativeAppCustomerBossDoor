import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import PagerView from 'react-native-pager-view'
import sty from '../../themes/sty';
interface Props{
    listImage?:any[];
}
const PagerViewImage = (props:Props) => {
    const [page, setPage] = useState(0);
    const url = [
        "https://cdn.pixabay.com/photo/2019/06/26/09/52/shit-image-4300034_1280.jpg",
        "https://media.istockphoto.com/id/1302343043/vi/anh/s%C3%B3ng-bi%E1%BB%83n-s%E1%BA%A1ch-v%E1%BB%A1-tr%C3%AAn-b%C3%A3i-bi%E1%BB%83n-c%C3%A1t-tr%E1%BA%AFng-v%E1%BB%9Bi-n%C6%B0%E1%BB%9Bc-m%C3%A0u-ng%E1%BB%8Dc-l%E1%BB%A5c-b%E1%BA%A3o.jpg?s=2048x2048&w=is&k=20&c=FDIZSUtcTOUrvw2zr-dNzRJLbLUgB5g8g-aXQEL6JGY=",
        "https://media.istockphoto.com/id/486274678/vi/anh/s%C3%B3ng-bi%E1%BB%83n-trong-c%C6%A1n-b%C3%A3o.jpg?s=2048x2048&w=is&k=20&c=KsHoAkqN_6zIaw1Ec5dOv66AgTMIrpdYthYVDoL-XAE="
    ]
    return (
        <View style={ sty.px_16}>
            <PagerView
                style={styles.pager}
                initialPage={0}
                onPageSelected={(e) => setPage(e.nativeEvent.position)}
            >
                {url.map((uri, index) =>
                    <View key={index} style={styles.page}>
                        <Image source={{ uri:uri }} style={styles.image} />
                    </View>
                )}
            </PagerView>

            {/* indicator */}
            <View style={styles.dotContainer}>
                {url.map((_, i) => (
                    <View
                        key={i}
                        style={[
                            styles.dot,
                            { backgroundColor: i === page ? "#007bff" : "#ccc" },
                        ]}
                    />
                ))}
            </View>
        </View>
    )
}

export default PagerViewImage
const styles = StyleSheet.create({
    dotContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    image: { width: "100%", height: 180, borderRadius: 8 }, // Sửa lại height cố định
    page: { justifyContent: "center", alignItems: "center", width: "100%", height: 180 }, // Thêm width, height
    pager: { width: "100%", height: 180 }, // Sửa lại width
})