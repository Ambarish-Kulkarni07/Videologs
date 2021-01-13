import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'
import Constant from 'expo-constants'
import Home from "./src/screens/Home"
import Search from './src/screens/Search'
import VideoPlayer from './src/screens/VideoPlayer'
import Explore from './src/screens/Explore'
import Suscribe from './src/screens/Suscribe'
import {MaterialIcons} from '@expo/vector-icons';
import {reducer} from './src/reducers/reducer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const store = createStore(reducer)
const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = ()=>{
  return(
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;

        if (route.name === 'home') {
          iconName="home";
        } else if (route.name === 'explore') {
          iconName = "pageview";
        }
        else if (route.name === 'subscribe') {
          iconName = "library-add";
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={33} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'blue',
      inactiveTintColor: 'black',
    }}
    >
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="explore" component={Explore} />
      <Tabs.Screen name="subscribe" component={Suscribe} />
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="roothome" component={RootHome} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="videoplayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

    
  );
}

