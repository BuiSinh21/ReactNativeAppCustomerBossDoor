import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TextDisplay from '../TextDisplay'
import { appColor } from '../../constant/appColor'
interface TagProps {
    bgColor?: string,
    color?: string,
    label: string,
    fontSize?: number,
}
const Tag = (props: TagProps) => {
    return (
        <View style={[{ backgroundColor: props.bgColor || "" }, styles.tag]}>
            <TextDisplay text={props.label} color={props.color || appColor.textBlack} fontSize={props.fontSize || 14}></TextDisplay>
        </View>
    )
}

export default Tag
const styles = StyleSheet.create({
    tag: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius:10

    }
})