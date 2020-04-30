import React, { useEffect, useState } from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { categories, meals } from '../data/';
import Meal from '../models/Meals';
import MealList from '../components/MealList';


const CategoriesMealScreen: NavigationStackScreenComponent = ({ navigation }) => {
    const [categoryMeals, setCategoryMeals] = useState<Meal[]>([])
    useEffect(() => {
        const id = navigation.getParam('id');
        setCategoryMeals(meals.filter(meal => meal.categoryIds.some(categoryId => categoryId === id)))
    }, [])

    if (categoryMeals.length === 0)
        return null;

    return (
       <MealList meals={categoryMeals} navigation={navigation} routeName='MealDetails' />
    )
}

CategoriesMealScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: categories.find(t => t.id === navigation.getParam('id'))?.title
    }
}



export default CategoriesMealScreen;