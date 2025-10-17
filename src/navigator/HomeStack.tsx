import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HOME_ROUTES } from '../routes';
import HomeScreen from '../screens/Home/HomeScreen';
import ControlScreen from '../screens/ControlScreen/ControlScreen';
import HistoryDevice from '../screens/HistoryDevice';
import SettingDevice from '../screens/SettingDevice';
import ListUser from '../screens/ListUser';
import AddUser from '../screens/AddUser';


const Stack = createNativeStackNavigator<any>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={HOME_ROUTES.INFO_NOTIFICATION}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={HOME_ROUTES.CONTROL}
        component={ControlScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={HOME_ROUTES.HISTORY_DEVICE}
        component={HistoryDevice}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={HOME_ROUTES.SETTING_DEVICE}
        component={SettingDevice}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={HOME_ROUTES.LIST_USER}
        component={ListUser}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={HOME_ROUTES.ADD_USER}
        component={AddUser}
        options={{
          headerShown: false,
        }}
      />
     
    </Stack.Navigator>
  );
};

export default HomeStack;
