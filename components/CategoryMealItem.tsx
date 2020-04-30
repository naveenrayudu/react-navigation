import React from 'react';
import Meal from '../models/Meals';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { meals } from '../data';


const CategoryMealItem: React.FC<{
    meal: Meal,
    onMealSelect: () => void
}> = ({ meal, onMealSelect }) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={onMealSelect}>
                <View>
                    <View style={styles.imageContainer}>
                        <ImageBackground style={styles.imageStyle} source={{ uri: meal.imageUrl }}>
                            <Text numberOfLines={1} style={styles.imageText}>{meal.title}</Text>
                        </ImageBackground>
                    </View>

                    <View style={styles.detailsContainer}>
                        <Text>{meal.duration}</Text>
                        <Text>{meal.complexity.toLocaleUpperCase()}</Text>
                        <Text>{meal.affordability.toLocaleUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '90%',
        marginLeft: '5%',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 20
    },
    imageStyle: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    imageContainer: {
        height: '85%'
    },
    imageText: {
        paddingVertical: 5,
        backgroundColor: '#666666',
        opacity: 0.8,
        width: '100%',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
        fontSize: 17,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    detailsContainer: {
        height: '15%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        paddingHorizontal: 20
    }
})

export default CategoryMealItem
