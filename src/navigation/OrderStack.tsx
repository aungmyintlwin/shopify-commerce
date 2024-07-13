import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { Text } from "react-native-paper";

function OderScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Oder Screen</Text>
    </View>
  );
}

const OderStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown : false, animationEnabled : false }}>
      <Stack.Screen name="OderScreen" component={OderScreen} />
    </Stack.Navigator>
  );
};
export default OderStack;