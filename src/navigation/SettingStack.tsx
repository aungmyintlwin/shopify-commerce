import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "../screens/SettingScreen/SettingScreen";

export type SettingStackParamList = {
  SettingScreen: undefined;
};
const Stack = createStackNavigator<SettingStackParamList>();

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown : false, animationEnabled : false }}>
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
};
export default SettingStack;