import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';


const MealNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals:{
    screen:CategoryMealScreen
  },
  MealDetail: MealDetailsScreen

});

export default createAppContainer(MealNavigator);