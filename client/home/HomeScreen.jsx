import React, { useContext } from 'react';
import { Text, Button, View } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import LinearView from '../sharedComponents/LinearView.jsx';

import Discover from '../discover/index.jsx';
import ChatSelection from '../Chat/index.jsx';
import Home from './Home.jsx';
import WishList from '../wishList/WishList.jsx';
import Profile from '../profile/index.jsx';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarActiveTintColor: '#DCABDF',
      tabBarInactiveTintColor: '#CEB992',
      tabBarStyle: {
        backgroundColor: '#272838',
      },
      tabBarIndicatorStyle: {
        backgroundColor: '#DCABDF',
      }
    }}>
      <Tab.Screen name="Home2" component={Home} options={{
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-home-outline"
            size={tabInfo.focused ? 20 : 18}
            color={tabInfo.color}
          />
        )
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="person-circle-outline"
            size={tabInfo.focused ? 20 : 18}
            color={tabInfo.color}
          />
        )
      }}/>
      <Tab.Screen name="Saved" component={WishList} options={{
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="bookmark-outline"
            size={tabInfo.focused ? 20 : 18}
            color={tabInfo.color}
          />
        )
      }}/>
      <Tab.Screen name="Chat" component={ChatSelection} options={{
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-chatbubble-ellipses-outline"
            size={tabInfo.focused ? 20 : 18}
            color={tabInfo.color}
          />
        )
      }}/>
    </Tab.Navigator>
  );
};
export default HomeScreen;