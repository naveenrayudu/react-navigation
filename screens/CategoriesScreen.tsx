import React from 'react';
import { FlatList } from 'react-native';
import { categories } from '../data';
import Category from '../models/Category';
import { NavigationStackProp, NavigationStackScreenComponent } from 'react-navigation-stack';
import CategoryScreenItem from '../components/CategoryScreenItem';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { DrawerActions } from 'react-navigation-drawer';


const generateListItem = (category: Category, navigation: NavigationStackProp) => {
    return (
        <CategoryScreenItem onPress={() => navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
                id: category.id
            }
        })} category={category} />
    )
}

const CategoriesScreen: NavigationStackScreenComponent = ({ navigation }) => {
    return (
        <FlatList style={{
            backgroundColor: 'white'
        }} keyExtractor={(item) => item.id} numColumns={2} data={categories} renderItem={({ item }) => generateListItem(item, navigation)} />
    )
}

export default CategoriesScreen;