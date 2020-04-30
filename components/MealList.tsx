import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CategoryMealItem from './CategoryMealItem';
import Meal from '../models/Meals';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { NavigationRoute, NavigationParams } from 'react-navigation';

const MealList: React.FC<{
    meals: Meal[],
    routeName: string,
    navigation: StackNavigationProp<NavigationRoute<NavigationParams>, NavigationParams>
}> = ({meals, navigation, routeName}) => {
    return (
        <View style={styles.screen}>
            <FlatList data={meals} style={{
                width: '100%'
            }}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item }) => <CategoryMealItem meal={item} onMealSelect={() => {
                    navigation.navigate({
                        routeName: routeName,
                        params: {
                            id: item.id,
                            name: item.title
                        }
                    })
                }}  /> } />
        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default MealList
