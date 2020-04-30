import React from 'react';
import { Text, View, TouchableOpacity, TouchableNativeFeedback, Platform, TouchableWithoutFeedbackProps, StyleSheet } from 'react-native';
import Category from '../models/Category';
import Colors from '../constants/Colors';

const CategoryScreenItem: React.FC<{
    onPress: () => void,
    category: Category
}> = ({ onPress, category }) => {
    let ComponentToUse: React.ComponentClass<TouchableWithoutFeedbackProps> = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version > 21) {
        ComponentToUse = TouchableNativeFeedback
    }

    return (
        <View style={styles.container}>
            <ComponentToUse onPress={onPress}>
                <View style={{ ...styles.listItem, backgroundColor: category.color }}>
                    <Text style={styles.textStyle} numberOfLines={2}>{category.title}</Text>
                </View>
            </ComponentToUse>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10
    },
    listItem: {
        flex: 1,
        height: 150,
        borderRadius: 10,
        marginVertical: 15,
        marginHorizontal: 10,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    textStyle: {
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        textAlign: 'right'
    }
})

export default CategoryScreenItem
