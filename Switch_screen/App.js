//  Cài đặt các thư viện cần thiết
// npm install @react-navigation/native @react-navigation/stack
// npm install react-native-screens react-native-safe-area-context
// npm install react-native-gesture-handler react-native-reanimated

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4299e1',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: '🏠 Trang Chủ' }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{ title: '👤 Hồ Sơ Cá Nhân' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}