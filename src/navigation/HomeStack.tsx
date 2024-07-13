import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen/NotificationScreen";
import PricingScreen from "../screens/PricingScreen/PricingScreen";

export type HomeStackParamList = {
  HomeScreen: undefined;
  NotificationScreen: undefined;
  PricingScreen: undefined;
};
const Stack = createStackNavigator<HomeStackParamList>();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown : false, animationEnabled : true }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="PricingScreen" component={PricingScreen} />
    </Stack.Navigator>
  );
};
export default HomeStack;