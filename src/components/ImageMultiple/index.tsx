import React, { useState } from "react";
import { View, Image, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { launchImageLibrary, Asset } from "react-native-image-picker";
import IMAGES from "../../assets/images";
import TextDisplay from "../TextDisplay";
import sty from "../../themes/sty";
interface Props {
  setPhoto: React.Dispatch<React.SetStateAction<Asset[] | null>>
}
const ImagePickerMultipleComponent = (props: Props) => {
  const handleOpenLibrary = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        selectionLimit:0
      },
      (response) => {
        if (response.didCancel) {
          console.log("Người dùng đã hủy");
        } else if (response.errorCode) {
          Alert.alert("Lỗi", response.errorMessage || "Không thể mở thư viện ảnh");
        } else if (response.assets && response.assets.length > 0) {
          props.setPhoto(response.assets);
        }
      }
    );
  };

  return (
    <View>
      <TouchableOpacity style={styles.uploadBox} onPress={handleOpenLibrary}>
        <View style={[sty.flexRow, sty.itemsCenter,sty.gap_16]}>
          <Image source={IMAGES.HOME.icon_camera} style={styles.icon} />
          <TextDisplay fontSize={16} text={"Chọn ảnh"} color="#3683F7" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadBox: {
    width: "100%",
    borderWidth: 1,
    paddingVertical: 9,
    borderColor: "#C3CAD7",
    borderRadius: 22,
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAFBFC",
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default ImagePickerMultipleComponent;
