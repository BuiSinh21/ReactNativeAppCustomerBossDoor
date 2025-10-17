import React, { useEffect, useMemo, useRef, useState } from "react";
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image, Button, Platform } from "react-native"; // Sửa Text từ react-native
import MapView, { LatLng, Marker, Polyline } from "react-native-maps";
import polyline from '@mapbox/polyline';
import { Modalize } from 'react-native-modalize';
import { useNavigation } from "@react-navigation/core";
import WebView from "react-native-webview";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { HeaderBack, TextDisplay } from "../../../components";
import sty from "../../../themes/sty";
import { appColor } from "../../../constant/appColor";
import IMAGES from "../../../assets/images";
import { formatPhoneNumber } from "../../../common/until";
import { ROOT_ROUTES, SERVICE_PREPARE_ROUTES } from "../../../routes";
const ORS_API_KEY = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImFlMDgxYTk2OWM4NDRiMTI5Mjg2NmYxOTM0ZWFkYzBkIiwiaCI6Im11cm11cjY0In0=";

const MapServiceRepare = () => {
    const { user, geolocation } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
        const navigate = useNavigation<any>();
    const [routeCoords, setRouteCoords] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const modalizeRef = useRef<Modalize>(null);
    const [timeLeft, setTimeLeft] = useState(300);
    const [origin] = useState({
        latitude: 21.05, // Hồ Tây
        longitude: 105.816667,
    });
    const [latLng, setLatlng] = useState<LatLng>({
        latitude: 0.0,
        longitude: 0.0,
    })

    const onOpen = () => {
        modalizeRef.current?.open();
    };
    // useEffect(() => {
    //     if (timeLeft > 0) {
    //         const timer = setInterval(() => {
    //             setTimeLeft(timeLeft - 1);
    //         }, 1000);
    //         return () => clearInterval(timer); // Dọn dẹp khi component unmount
    //     }
    // });
    useEffect(() => {
        if (geolocation?.latitude && geolocation.longitude) {
            setLatlng({
                latitude: geolocation?.latitude,
                longitude: geolocation.longitude
            })
        }
    }, [geolocation])
    useEffect(() => {
        modalizeRef.current?.open();
    }, [])
    //   const fetchRoute = async () => {
    //     try {
    //       const response = await fetch("https://api.openrouteservice.org/v2/directions/driving-car", {
    //         method: "POST",
    //         headers: {
    //           Authorization: ORS_API_KEY,
    //           "Content-Type": "application/json",
    //           "Accept": "application/json", // Yêu cầu định dạng json
    //         },
    //         body: JSON.stringify({
    //           coordinates: [
    //             [105.816667, 21.05],        // Hồ Tây
    //             [105.833333, 21.033333],    // Điểm trung gian
    //             [105.854167, 21.028611],    // Hồ Gươm
    //           ],
    //           format: "geojson", // Sử dụng format json thay vì geojson
    //         }),
    //       });

    //       if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //       }

    //       const data = await response.json();
    //       console.log("Response data:", data);
    //       if (data.routes && data.routes.length > 0) {
    //         const encodedGeometry = data.routes[0].geometry;
    //         const coords = polyline.decode(encodedGeometry).map(([longitude, latitude]) => ({
    //           latitude,
    //           longitude,
    //         }));
    //         const endPoint = coords.map((item: any) => ({
    //           latitude: item.longitude,
    //           longitude: item.latitude,
    //         }))
    //         console.log("Decoded routeCoords:", endPoint); // Kiểm tra dữ liệu
    //         setRouteCoords(endPoint);
    //       } else {
    //         setError("Không tìm thấy lộ trình");
    //       }
    //     } catch (error) {
    //       console.error("Error fetching route:", error);
    //       setError("Lỗi khi lấy dữ liệu lộ trình");

    //     }
    //   };
    console.log("latLng", geolocation);

    const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      html, body, #map { height: 100%; margin: 0; padding: 0; }
    </style>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  </head>
  <body>
    <div id="map"></div>
    <script>
      // Lấy toạ độ từ React Native
      const lat = ${geolocation?.latitude};
      const lng = ${geolocation?.longitude};

      // Khởi tạo bản đồ tại vị trí hiện tại
      var map = L.map('map').setView([lat, lng], 15);

      // Thêm layer bản đồ
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
        maxZoom: 19 
      }).addTo(map);

      // Marker vị trí hiện tại
      L.marker([lat, lng]).addTo(map)
        .bindPopup('Vị trí hiện tại của bạn')
        .openPopup();

      // Nếu có đường đi thì vẽ thêm
      var routeCoords = ${JSON.stringify(routeCoords.map(c => [c.latitude, c.longitude]))};
      if (routeCoords.length > 0) {
        var polyline = L.polyline(routeCoords, { color: 'blue', weight: 4 }).addTo(map);
        map.fitBounds(polyline.getBounds());
      }
    </script>
  </body>
</html>
`;
    return (
        <View style={styles.container}>
            <HeaderBack style={{ backgroundColor: "#fff" }} title="Dịch vụ sửa chữa" />
            {Platform.OS === 'android' ?
                <View style={styles.webView}>
                    <WebView
                        originWhitelist={['*']}
                        source={{ html }}
                        style={{ flex: 1 }}
                    />
                </View>
                :
                <MapView
                    style={styles.mapView}
                    initialRegion={{
                        latitude: Number(geolocation?.latitude), // Trung bình để bao phủ cả khu vực
                        longitude: Number(geolocation?.longitude),
                        latitudeDelta: 0.1, // Mở rộng khu vực hiển thị
                        longitudeDelta: 0.1,
                    }}
                >
                    <Marker coordinate={{
                        latitude: latLng.latitude,
                        longitude: latLng.longitude,
                    }}
                        title="Vị trí của bạn" />

                    {/* <Marker coordinate={destination} title="Hồ Gươm" /> */}

                    {routeCoords.length > 0 && (
                        <Polyline
                            coordinates={routeCoords}
                            strokeColor="blue"
                            strokeWidth={5}
                        />
                    )}
                </MapView>
            }

            <Modalize
                ref={modalizeRef}
                modalHeight={180}
                overlayStyle={{ backgroundColor: "transparent" }} // nền sau trong suốt
                handleStyle={{ backgroundColor: "#ccc" }}        // chỉnh màu thanh kéo nếu muốn
                modalStyle={{ borderTopLeftRadius: 20, backgroundColor: "#ffff", borderTopRightRadius: 20 }}
            >
                <TouchableOpacity activeOpacity={0.5}
                    onPress={() => {
                        navigate.navigate(ROOT_ROUTES.SERVICE_STACK, {
                            screen: SERVICE_PREPARE_ROUTES.DETAIL_SERVICE_PREPPARE,
                        })
                    }}>
                    <View style={{ padding: 20 }}>
                        <TextDisplay text={"Đang tìm kỹ thuật viên gần bạn..."} color={appColor.textBlack} fontSize={16} styles={{ fontWeight: "700" }} />
                        <View style={[sty.flexRow, sty.flex_1, sty.gap_16, sty.mt_12]}>
                            <Image source={IMAGES.ORDER.locationdefault} style={{ height: 18, width: 14 }} />
                            <View style={{ flex: 1 }}>
                                <View style={[sty.flexRow, sty.gap_12, sty.mb_8]}>
                                    <TextDisplay fontWeight='bold' fontSize={15} color={appColor.textBlack} text={"Nguyễn Văn A"} />
                                    <TextDisplay text={formatPhoneNumber("0941523644")} />
                                </View>
                                <TextDisplay
                                    text={"123 Đường Lê Duẩn, Phường Khâm Thiên, Quận Đống Đa, Hà Nội, Việt Nam"}
                                    styles={{ flexShrink: 1, flexWrap: "wrap" }}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modalize>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    sectionToach: {
        position: 'absolute',
        top: "20%",
        backgroundColor: "#fff",
        borderWidth: 1,
        width: "95%",
        borderColor: '#EDEFF2',
        borderRadius: 15,
        padding: 15,
    },
    buttonContainer: {
        position: "absolute",
        flexDirection: "row",
        width: "100%",
        bottom: 100,
        justifyContent: "space-between",
        zIndex: 999,
        paddingHorizontal: 20,
        elevation: 10,
    },
    errorText: {
        position: "absolute",
        bottom: 20,
        left: 20,
        color: "red",
        fontSize: 16,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    buttonOffline: {
        width: 110,
        paddingVertical: 7,
        paddingHorizontal: 5,
        borderRadius: 25,
        backgroundColor: "#ffff",
    },
    offline: {
        borderRadius: 25,
        paddingVertical: 7,
        paddingHorizontal: 10,
        justifyContent: "space-around",
        backgroundColor: "#FFE7E7",
    },
    start: {
        backgroundColor: "#3683F7",
        shadowColor: '#3683F766',
        shadowOffset: { width: -2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    stop_working: {
        backgroundColor: "#F4A32A",
        shadowColor: '#FFB74B66',
        shadowOffset: { width: -2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    offlineText: {
        fontWeight: "bold",
    },
    startText: {
        color: "#fff",
        fontWeight: "bold",
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: "100%"
    },
    content: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8,
    },
    doingOrder: {
        position: 'absolute',
        bottom: "22%",
        backgroundColor: "#fff",
        borderWidth: 1,
        width: "95%",
        borderColor: '#EDEFF2',
        borderRadius: 15,
        padding: 15,
    },
    mapView: {
        position: 'absolute',
        top: 120,
        flex: 1,
        width: '100%',
        height: '100%',
    },
    webView: {
        flex: 1,
        width: "100%",
        height: "100%",
        position: 'absolute',
        bottom: 0,
        left: 0, right: 0,
        ...Platform.select({
            android: {
                top: 85,
            },
            ios: {
                top: 60,
            },
        }),
    }
});

export default MapServiceRepare;