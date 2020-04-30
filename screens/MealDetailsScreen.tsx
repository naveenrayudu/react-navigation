import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import Meal from '../models/Meals';
import { meals } from '../data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';


const itemsExtractors = (details: string[], headerTitle: string) => {
    return (
        <View style={styles.infoContainer}>
            <Text style={styles.infoHeader}>{headerTitle}</Text>
            {
                details.map(detail => (
                    <View key={detail} style={styles.infoDetail}>
                        <Text>{detail}</Text>
                    </View>
                ))
            }
        </View>
    )
}

const MealDetailsScreen: NavigationStackScreenComponent = ({ navigation }) => {
    const [meal, setMeal] = useState<Meal | undefined>(undefined);

    useEffect(() => {
        setMeal(meals.find(t => t.id === navigation.getParam('id')))
    }, [navigation.getParam('id')])

    if (!meal)
        return null;

    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <View style={{
                justifyContent: 'center'
            }}>
                <View style={styles.detailsHeader}>
                    <View style={styles.titleContainer} >
                        <Text style={styles.title}>{meal.title}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image source={{
                            uri: meal.imageUrl
                        }} style={styles.imageStyle} />
                        <View style={styles.detailsContainer}>
                            <Text>{meal.duration}-min</Text>
                            <Text>{meal.complexity.toLocaleUpperCase()}</Text>
                            <Text>{meal.affordability.toLocaleUpperCase()}</Text>
                        </View>
                    </View>
                </View>

                {itemsExtractors(meal.ingredients, 'Ingredients')}

                {itemsExtractors(meal.steps, 'Steps')}
            </View>

        </ScrollView>
    )
}

MealDetailsScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: navigation.getParam('name'),
        headerRight: (props) => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="favorite" iconName="ios-star" onPress={() => console.log('CLicked')} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    imageStyle: {
        height: '85%',
        width: '100%'
    },
    imageContainer: {
        height: 200,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
        flex: 1
    },
    detailsContainer: {
        height: '15%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderColor: 'grey',
        borderTopColor: 'transparent',
        borderWidth: 1,
        borderTopWidth: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    title: {
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    titleContainer: {
        marginTop: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '95%',
        justifyContent: 'center'
    },
    detailsHeader: {
        width: '100%',
        marginTop: 10,
        alignItems: 'center',
        height: 300
    },
    infoContainer: {
        marginTop: 10,
        width: '95%',
        marginLeft: '2.5%',
        marginBottom: 5
    },
    infoHeader: {
        fontSize: 18,
        fontFamily: 'open-sans-bold',
        textAlign: 'center'
    },
    infoDetail: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderColor: 'lightgrey',
        borderWidth: 1,
        marginTop: 10
    }
})

export default MealDetailsScreen;