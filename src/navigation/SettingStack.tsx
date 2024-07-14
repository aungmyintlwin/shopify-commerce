import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "../screens/SettingScreen/SettingScreen";
import CustomerListScreen from "../screens/CustomerListScreen/CustomerListScreen";

export type SettingStackParamList = {
  SettingScreen: undefined;
  CustomerListScreen: undefined;
};
const Stack = createStackNavigator<SettingStackParamList>();

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown : false, animationEnabled : false }}>
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="CustomerListScreen" component={CustomerListScreen} />
    </Stack.Navigator>
  );
};
export default SettingStack;