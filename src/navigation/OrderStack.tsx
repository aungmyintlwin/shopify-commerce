import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OrderListScreen from "../screens/OrderListScreen/OrderListScreen";

export type OrderStackParamList = {
  OrderListScreen: undefined;
};
const Stack = createStackNavigator<OrderStackParamList>();
const OderStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown : false, animationEnabled : false }}>
      <Stack.Screen name="OrderListScreen" component={OrderListScreen} />
    </Stack.Navigator>
  );
};
export default OderStack;