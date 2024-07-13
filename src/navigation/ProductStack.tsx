import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductListScreen from "../screens/ProductListScreen/ProductListScreen";

export type ProductStackParamList = {
  ProductListScreen: undefined;
};
const Stack = createStackNavigator<ProductStackParamList>();

const ProductStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown : false, animationEnabled : false }}>
      <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
    </Stack.Navigator>
  );
};
export default ProductStack;