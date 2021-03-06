import {  Foundation, Feather, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TrackingDetailScreen from '../screens/TrackingDetailScreen';
import TrackScreen from '../screens/TrackScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}


const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={TrackingDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}


const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#031420',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#F1F6FB',
        }
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <Foundation name="home" size={28} style={{marginBottom: -3}} color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Track"
        component={TrackScreen}
        options={{
          title: 'Track',
          tabBarIcon: ({ color }) => <Feather name="bookmark" size={28} style={{marginBottom: -3}} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Send"
        component={TrackingDetailScreen}
        options={{
          title: 'Send',
          tabBarIcon: ({ color }) => <Ionicons name="paper-plane-outline" size={28} style={{marginBottom: -3}} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Feather name="settings" size={28} style={{marginBottom: -3}} color={color} />,
        }}
      />

    </BottomTab.Navigator>
  );
}
