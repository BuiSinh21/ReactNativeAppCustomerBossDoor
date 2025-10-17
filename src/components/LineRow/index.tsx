import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';

interface DividerCustomProps {
  style?: StyleProp<ViewStyle>;
}

const LineRow = ({ style }: DividerCustomProps) => {
  return (
    <View style={[styles.dashedLine,style]} />
  );
};

export default LineRow;
const styles = StyleSheet.create({

  dashedLine: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#EDEFF2',
    marginVertical: 8,
    marginBottom: 19,
    borderRadius: 1,

  }
})