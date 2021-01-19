import React from 'react'
import {View,Text,StyleSheet,FlatList,Platform} from 'react-native'

import {CATEGORIES,MEALS} from '../data/dummy-data'
import Colors from '../constants/Color'

const CategoriesMealScreen = props => {

  const renderMealItem = itemData => {
    return(<View><Text>{itemData.item.title}</Text></View>)
  }

 const catId = props.navigation.getParam('categoryId')


 const displayedMeals = MEALS.filter(
   meal => meal.categoryIds.indexOf(catId)>=0
 )

 const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
  return(
    <View style={styles.screen}>
      <FlatList data={displayedMeals} keyExtractor={(item,index)=> item.id} renderItem={renderMealItem}/>
    </View>

  )
}

CategoriesMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return{
    headerTitle: selectedCategory.title,
  }
  }



const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})


export default CategoriesMealScreen;