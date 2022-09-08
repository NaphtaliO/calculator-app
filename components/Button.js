import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//calculator button component

const Button = ({ onPress, backgroundColor, color, text }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, { backgroundColor: backgroundColor }]}>
                <Text style={[{ color: color }, styles.text]}>{text}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        width: (windowWidth / 4) - 10,
        height: (windowWidth / 4) - 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        margin: 5
    },
    text: {
        fontSize: 30,
    }
})