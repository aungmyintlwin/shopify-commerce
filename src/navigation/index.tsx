import React from "react";
import { View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { scaleHeight, scaleWidth } from "../utils/responsive";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStack from "./HomeStack";
import OrderStack from "./OrderStack";
import ProductStack from "./ProductStack";
import SettingStack from "./SettingStack";
import { useTheme } from "react-native-paper";

const Tab = createMaterialBottomTabNavigator();

function TabIcon(route: any, focused: boolean, color: string,theme: any) {
  return (
    <View style={{ alignItems: "center",marginTop: scaleHeight(-8) }}>
        {
          route?.name === "HomeStack" && (
            <View style={{justifyContent: 'center',alignItems: 'center'}}>
              <MaterialCommunityIcons name="home-outline" color={focused ? theme.colors.primary : color} size={scaleWidth(24)} />
              {focused && <View style={{width: scaleWidth(5),height: scaleWidth(5),backgroundColor: theme.colors.primary,borderRadius: scaleWidth(3)}}/>}
            </View>
          )
        }
        {
          route?.name === "OrderStack" && (
            <View style={{justifyContent: 'center',alignItems: 'center'}}>
              <MaterialCommunityIcons name="briefcase-check-outline" color={focused ? theme.colors.primary : color} size={scaleWidth(24)} />
              {focused && <View style={{width: scaleWidth(5),height: scaleWidth(5),backgroundColor: theme.colors.primary,borderRadius: scaleWidth(3)}}/>}
            </View>
          ) 
        }
        {
          route?.name === "ProductStack" && (
            <View style={{justifyContent: 'center',alignItems: 'center'}}>
              <MaterialCommunityIcons name="tag-outline" color={focused ? theme.colors.primary : color} size={scaleWidth(24)} />
              {focused && <View style={{width: scaleWidth(5),height: scaleWidth(5),backgroundColor: theme.colors.primary,borderRadius: scaleWidth(3)}}/>}
            </View>
          ) 
        }
        {
          route?.name === "SettingStack" && (
            <View style={{justifyContent: 'center',alignItems: 'center'}}>
              <MaterialCommunityIcons name="menu" color={focused ? theme.colors.primary : color} size={scaleWidth(24)} />
              {focused && <View style={{width: scaleWidth(5),height: scaleWidth(5),backgroundColor: theme.colors.primary,borderRadius: scaleWidth(3)}}/>}
            </View>
          )
        }
    </View>
  );
}

const AppFollow = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={{height: scaleHeight(55) }}
      activeIndicatorStyle={{width: 0,height: 0}}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => TabIcon(route, focused, color, theme),
        tabBarStyle: { height: scaleHeight(10) },
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="OrderStack" component={OrderStack} />
      <Tab.Screen name="ProductStack" component={ProductStack} />
      <Tab.Screen name="SettingStack" component={SettingStack} />
    </Tab.Navigator>
  );
};
export default AppFollow;
