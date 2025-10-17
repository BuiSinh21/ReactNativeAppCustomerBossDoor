import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PROFILE_ROUTES } from '../routes';
import AccountScreen from '../screens/Account/AccountScreen';
import AccountInfo from '../screens/Account/AccountInfo/AccountInfor/AccountInfo';
import EditAccount from '../screens/Account/AccountInfo/EditAccount/EditAccount';
import ChangePassword from '../screens/Account/AccountInfo/ChangePassword/ChangePassword';
import Support from '../screens/Support/Support';
import RequestSupport from '../screens/Account/RequestSupport/RequestSupport';



const Stack = createNativeStackNavigator<any>();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={PROFILE_ROUTES.ACCOUNT_INFO}
        component={AccountInfo}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PROFILE_ROUTES.UPDATE_PROFILE}
        component={EditAccount}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PROFILE_ROUTES.CHANGE_PASSWORD}
        component={ChangePassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PROFILE_ROUTES.REQUEST_SUPPORT}
        component={RequestSupport}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PROFILE_ROUTES.SUPPORT}
        component={Support}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
