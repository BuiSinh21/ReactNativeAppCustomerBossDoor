import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  Animated,
  Dimensions,
  Alert,
  Image,
} from "react-native";
import IMAGES from "../../assets/images";

const { width } = Dimensions.get("window");

interface Props {
  width?: number;
  height?: number;
  onSuccess?: () => void;
}

const SwipeButtonCustom = ({ width: btnWidth = width - 50, height = 50, onSuccess }: Props) => {
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        const maxDistance = btnWidth - height;
        if (gesture.dx >= 0 && gesture.dx <= maxDistance) {
          translateX.setValue(gesture.dx);
        }
        else if (gesture.dx > maxDistance) {
          translateX.setValue(maxDistance); // Cố định tại vị trí tối đa
        }
      },
      onPanResponderRelease: (_, gesture) => {
        const maxDistance = btnWidth - height;
        if (gesture.dx > maxDistance - 10) {
          // ✅ Swipe thành công
          Animated.timing(translateX, {
            toValue: maxDistance,
            duration: 150,
            useNativeDriver: true,
          }).start(() => {
            onSuccess && onSuccess();
            // Reset lại nếu muốn dùng nhiều lần
            setTimeout(() => {
              Animated.spring(translateX, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            }, 1000);
          });
        } else {
          // 🔄 Trượt chưa hết → trả về 0
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={[styles.container, { width: btnWidth, height }]}>
      <Text style={styles.text}>Kéo để hoàn thành</Text>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.thumb,
          { width: 64, height:40, transform: [{ translateX }] },
        ]}
      >
        <Image source={IMAGES.HOME.icon_arrow_right} style={{width:30,height:30}}/>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007bff",
    borderRadius: 15,
    justifyContent: "center",
    overflow: "hidden",
  },
  text: {
    position: "absolute",
    alignSelf: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  thumb: {
    position: "absolute",
    left: 0,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginLeft:5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4, // Android shadow
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  arrow: {
    fontSize: 20,
    color: "#007bff",
    fontWeight: "bold",
  },
});

export default SwipeButtonCustom;
