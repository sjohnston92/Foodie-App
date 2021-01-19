import {Platform} from 'react-native'
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';

import Colors from '../constants/Color'



const MealNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerTitle:'Meal Categories'
    }
  },
  CategoryMeals:{
    screen:CategoryMealScreen,
  },
  MealDetail:{ 
    screen: MealDetailsScreen,
    navigationOptions: {
      headerTitle:'Meal Details'
    }
  }
},{
    mode:'modal',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : " "
      },
      headerTintColor: Platform.OS === 'android' ? "white" : Colors.primaryColor
      }
  }

);

export default createAppContainer(MealNavigator);