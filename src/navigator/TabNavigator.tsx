import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BOTTOM_TAB_ROUTES } from '../routes';
import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../themes/fontFamily';
import { useAppSelector } from '../redux/hooks';
import {
  IconHome, IconHomeActive, IconOrder, IconOrderActive, IconAccount,
  IconAcountActive
} from '../components/Icons';
import HomeScreen from '../screens/Home/HomeScreen';
import IconSearchActive from '../components/Icons/IconSearchActive';
import IconSearch from '../components/Icons/IconSearch';
import AccountScreen from '../screens/Account/AccountScreen';
import SearchScreen from '../screens/SearchScreen ';
import OrdersScreen from '../screens/Oders/OrderScreen';


const Tab = createBottomTabNavigator<any>();
const TabNavigator = () => {
  const { access_token, isFilter } = useAppSelector(state => state.auth);
  return (
    <Tab.Navigator
      initialRouteName={BOTTOM_TAB_ROUTES.HOME}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: isFilter == true ? {
          display: "none"
        } :
          styles.TabBarStyle,
        lazy: true,
        tabBarLabelStyle: styles.TabBarLabelStyle,
        tabBarActiveTintColor: '#1354D4',
        tabBarInactiveTintColor: '#52585f',
      }}>
      <Tab.Screen
        name={BOTTOM_TAB_ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <IconHomeActive /> : <IconHome />,
        }}
      />
      <Tab.Screen
        name={BOTTOM_TAB_ROUTES.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <IconSearchActive /> : <IconSearch />,
        }}
      />
      <Tab.Screen
        name={BOTTOM_TAB_ROUTES.ORDER}
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <IconOrderActive /> : <IconOrder />,
        }}
      />
      <Tab.Screen
        name={BOTTOM_TAB_ROUTES.ACCOUNT}
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <IconAcountActive /> : <IconAccount />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  TabBarStyle: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    paddingTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 12,
  },
  TabBarLabelStyle: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.BeVietnamPro_SemiBold,
  },
});
