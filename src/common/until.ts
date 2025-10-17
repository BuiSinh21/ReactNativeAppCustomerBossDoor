import { Province } from "../components/Interface";
import { DetailOrderReport, Services } from "../interfaces/auth";
import RNFS from 'react-native-fs';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
export function formatPhoneNumber(phone: string | undefined): string {

    return phone ? phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1.$2.$3") : "";
}

export function listOrderServices(arrOrder: DetailOrderReport[] | [], order_id: number): Services[] {
    const order = arrOrder.length > 0 ? arrOrder?.find(item => item.order_id == order_id) : undefined;
    return order ? order.services : [];
}

import { Alert, PermissionsAndroid, Platform } from 'react-native';
import { log } from "console";

export async function requestLocationPermission() {
    if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
}
export async function downloadAndSaveQR(url: string) {
  try {
    // 🔹 Xin quyền Android
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Thiếu quyền', 'Không thể lưu ảnh nếu chưa cấp quyền');
        return;
      }
    }

    // 🔹 Đường dẫn tạm
    const fileName = `qr_${Date.now()}.png`;
    const localPath = `${RNFS.TemporaryDirectoryPath}/${fileName}`;

    console.log('⬇️ Bắt đầu tải:', url);
    const res = await RNFS.downloadFile({
      fromUrl: url,
      toFile: localPath,
    }).promise;

    console.log('✅ Tải xong:', res);

    // 🔹 Lưu ảnh vào thư viện
    await CameraRoll.save(localPath, { type: 'photo' });
    Alert.alert('✅ Thành công', 'Đã lưu mã QR vào thư viện ảnh');
  } catch (error: any) {
    console.log('❌ Lỗi lưu ảnh:', error);
    Alert.alert('❌ Thất bại', `Không thể lưu mã QR\n${error?.message ?? ''}`);
  }
}
