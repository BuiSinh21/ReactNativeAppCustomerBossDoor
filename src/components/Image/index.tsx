import React, { useState } from "react";
import { View, Image, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { launchImageLibrary, Asset } from "react-native-image-picker";
import IMAGES from "../../assets/images";
import TextDisplay from "../TextDisplay";
interface Props {
  photo: Asset | null,
  setPhoto:React.Dispatch<React.SetStateAction<Asset | null>>
}
const ImagePickerComponent = (props: Props) => {
  const handleOpenLibrary = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
      },
      (response) => {
        if (response.didCancel) {
          console.log("Người dùng đã hủy");
        } else if (response.errorCode) {
          Alert.alert("Lỗi", response.errorMessage || "Không thể mở thư viện ảnh");
        } else if (response.assets && response.assets.length > 0) {
          props.setPhoto(response.assets[0]);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      {!props.photo ? (
        <TouchableOpacity style={styles.uploadBox} onPress={handleOpenLibrary}>
          <Image source={IMAGES.ACCOUNT.imageUpload} style={styles.icon} />
          <TextDisplay fontSize={16} text={"Chọn file"} color="#3683F7" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.uploadBox} onPress={handleOpenLibrary}>
          <Image source={{ uri: props.photo.uri }} style={styles.preview} />
        </TouchableOpacity>
      )}
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
    height: 180,
    borderWidth: 1,
    borderColor: "#C3CAD7",
    borderRadius: 22,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  preview: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    resizeMode: "cover",
  },
});

export default ImagePickerComponent;
