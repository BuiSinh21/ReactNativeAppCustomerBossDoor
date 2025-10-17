import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PROFILE_ROUTES, SERVICE_PREPARE_ROUTES } from '../routes';
import AccountInfo from '../screens/Account/AccountInfo/AccountInfor/AccountInfo';
import ServiceRepare from '../screens/ServiceRepare/ServiceRepare/ServiceRepare';
import MapServiceRepare from '../screens/ServiceRepare/MapServiceRepare/MapServiceRepare';
import DetailServiceRepare from '../screens/ServiceRepare/DetailServiceRepare/DetailServiceRepare';



const Stack = createNativeStackNavigator<any>();

const PrepareStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={SERVICE_PREPARE_ROUTES.SERVICE_PREPARE}
        component={ServiceRepare}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SERVICE_PREPARE_ROUTES.MAP_SERVICE_PREPARE}
        component={MapServiceRepare}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SERVICE_PREPARE_ROUTES.DETAIL_SERVICE_PREPPARE}
        component={DetailServiceRepare}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default PrepareStack;
