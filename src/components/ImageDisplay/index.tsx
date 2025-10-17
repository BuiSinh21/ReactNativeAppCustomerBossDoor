import React, { useState } from "react";
import { View, Image, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { launchImageLibrary, Asset } from "react-native-image-picker";
import IMAGES from "../../assets/images";
import TextDisplay from "../TextDisplay";
interface Props {
  photo: Asset,
  onRemove: () => void;
}
const ImageDisplay = (props: Props) => {
  return (
    <View style={styles.previewContainer}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: props.photo.uri }} style={styles.preview} />
        <TouchableOpacity
          style={styles.removeBtn}
          onPress={() => props.onRemove()}
        >
          <Image source={IMAGES.HOME.icon_close}  style={{width:30, height:30}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    position: "relative",
    width: "100%",
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 8,
    marginBottom: 8,
  },
  previewContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  removeBtn: {
    position: "absolute",
    top: 5,
    right: 5,
    borderRadius: 12,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  preview: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default ImageDisplay;
