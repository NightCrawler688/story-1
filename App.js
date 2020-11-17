import React from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStory from './screens/ReadStory';
import WriteStory from './screens/WriteStory';


 export default class App extends React.Component {
  render() {
    return(
        
        <AppContainer/>
        
    )
  }
 }
 const TabNavigator = createBottomTabNavigator({
  ReadStory:{screen:ReadStory},
  WriteStory:{screen:WriteStory}
},
{
  defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ({})=>{
     const routeName = navigation.state.routeName;
     if(routeName === 'ReadStory') {
       return(
         <Image source = {require('./assets/read.png')} style = {{width: 40,height:40}}/>
       )
     }
     else if(routeName === 'WriteStory') {
       return(
       <Image source = {require('./assets/write.png')} style = {{width:40,height:40}}/>
       )}
  }
  })
});
 const AppContainer = createAppContainer(TabNavigator);