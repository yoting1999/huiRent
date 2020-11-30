import React from 'react'
import { Icon } from 'native-base'

import { useSelector } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import GeneralStyles from '../styles/GeneralStyles'
import Colors from '../styles/Colors'

import Home from '../containers/Home/Home'
import Gift_index from '../components/Gift/Gift_index'
import RoomDetail from '../components/Home/Detail'

import SignUp from '../containers/Login/SignUp'
import Login from '../containers/Login/Login'

import settings from '../components/settings/settings'
import all from '../components/settings/AllPoints'
import used from '../components/settings/UsedPoint'

import MyReserve from '../components/MyReserve/MyReserve'



// Test
import SwipeList from '../components/UI/SwipeList'

const HomeStack = createStackNavigator()
function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <HomeStack.Screen name="home" component={Home} />
      <HomeStack.Screen name="roomDetail" component={RoomDetail} />
    </HomeStack.Navigator>
  )
}


const LoginStack = createStackNavigator()
function LoginStackScreen() {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="SignUp" component={SignUp} />
    </LoginStack.Navigator>
  )
}

const setStack = createStackNavigator()
function setStackScreen() {
  return (
    <setStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <setStack.Screen name="settings" component={settings} />
      <setStack.Screen name="all" component={all} />
      <setStack.Screen name="used" component={used} />
    </setStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

function AppTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.secondary,
      }}
    >
      <Tab.Screen name="home" component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon type="FontAwesome5" name="home" style={[GeneralStyles.iconStyle, { color: color }]} />
          ),
        }} />

      <Tab.Screen name="calendar" component={MyReserve}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon type="FontAwesome5" name="calendar" style={[GeneralStyles.iconStyle, { color: color }]} />
          ),
        }} />
      <Tab.Screen name="gift" component={Gift_index}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon type="FontAwesome5" name="gift" style={[GeneralStyles.iconStyle, { color: color }]} />
          ),
        }} />
      <Tab.Screen name="settings" component={setStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon type="FontAwesome5" name="user-cog" style={[GeneralStyles.iconStyle, { color: color }]} />
          ),
        }} />
    </Tab.Navigator>
  )
}

export default function AllRouter() {
  const login = useSelector(state => state.authReducer.login)
  return (
    <NavigationContainer>
      {login ?
        <AppTab />
        :
        <LoginStackScreen />
      }
    </NavigationContainer>
  )
}