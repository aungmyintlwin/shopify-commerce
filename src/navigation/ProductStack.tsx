import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductListScreen from "../screens/ProductListScreen/ProductListScreen";
import CreateProductScreen from "../screens/CreateProductScreen/CreateProductScreen";

export type ProductStackParamList = {
  ProductListScreen: undefined;
  CreateProductScreen: undefined;
};
const Stack = createStackNavigator<ProductStackParamList>();

const ProductStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown : false, animationEnabled : false }}>
      <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
      <Stack.Screen name="CreateProductScreen" component={CreateProductScreen} />
    </Stack.Navigator>
  );
};
export default ProductStack;