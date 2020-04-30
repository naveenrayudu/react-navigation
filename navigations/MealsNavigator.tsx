import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealScreen from "../screens/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import { createAppContainer, NavigationActions, NavigationRoute, NavigationParams } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { Platform } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from '../screens/FiltersScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';

interface ITabInfo {
  focused: boolean;
  tintColor?: string | undefined;
  horizontal?: boolean | undefined;
}

const defaultNavigationOptions: any = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans-bold',
    fontSize: 12
  },
  headerTintColor:
    Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTitleContainerStyle: {
    width: Platform.OS === "ios" ? "60%" : "75%",
    alignItems: Platform.OS === "ios" ? "center" : "flex-start",
  }
}

const generateLeftHeader = (navigation: StackNavigationProp<NavigationRoute<NavigationParams>, NavigationParams>) => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title='menu' iconName='ios-menu' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
    </HeaderButtons>
  )
}


const mealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: ({navigation}) => {
        return {
          headerTitle: "Meal Categories",
          headerLeft: () => generateLeftHeader(navigation)
        }
      }
    },
    CategoryMeals: CategoriesMealScreen,
    MealDetails: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOptions
  }
);

const favoriteNavigator = createStackNavigator({
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: "Your Favorites",
        headerLeft: () => generateLeftHeader(navigation)
      }
    }
  },
  FavoriteMealDetail: MealDetailsScreen
}, {
  defaultNavigationOptions: defaultNavigationOptions
})

const tabOptions = {
  Meals: {
    screen: mealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: ITabInfo) => {
        return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      },
      tabBarOnPress: (navigator: {
        navigation: any
      }) => {
        navigator.navigation.dispatch(NavigationActions.navigate({
          routeName: 'Categories'
        }))
      },
      tabBarColor: Colors.primaryColor
    }
  },
  FavoriteMeals: {
    screen: favoriteNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: ITabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      },
      tabBarOnPress: (navigator: {
        navigation: any
      }) => {
        navigator.navigation.dispatch(NavigationActions.navigate({
          routeName: 'Favorites'
        }))
      },
      tabBarLabel: 'Favorites!',
      tabBarColor: Colors.accentColor
    }
  }
}

const filterNavigator = createStackNavigator({
  filters: {
    screen: FiltersScreen,
    navigationOptions:  ({navigation}) => {
      return {
        headerTitle: "Meal Filters",
        headerLeft: () => generateLeftHeader(navigation)
      }
    }
  } 
}, {
  defaultNavigationOptions: defaultNavigationOptions
})


const tabNavigator = Platform.OS === 'android' ? 
createMaterialBottomTabNavigator(tabOptions, {
  activeColor: 'white',
  shifting: true
}) :
createBottomTabNavigator(
  tabOptions, {
  tabBarOptions: {
    activeTintColor: Colors.accentColor
  }
});



const drawerNavigator = createDrawerNavigator({
  homeDrawer: {
    screen: tabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals'
    }
  },
  filterDrawer: {
    screen: filterNavigator,
    navigationOptions: {
      drawerLabel: 'Filters!!'
    }
  }
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
})

export default createAppContainer(drawerNavigator);
