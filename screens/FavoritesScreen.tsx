import React from 'react';
import MealList from '../components/MealList';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { meals } from '../data';

const FavoritesScreen: NavigationStackScreenComponent = ({navigation}) => {
    const favoriteMeals = meals.filter(t => t.id === 'm1' || t.id === 'm2')
    return (
        <MealList meals={favoriteMeals} navigation={navigation} routeName='FavoriteMealDetail' />
    )
}


FavoritesScreen.navigationOptions = {}

export default FavoritesScreen;