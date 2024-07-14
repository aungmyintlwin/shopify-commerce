import { View, Text } from 'react-native'
import React from 'react'
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import Colors from './src/theme/colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppFollow from './src/navigation/index'
import MainScreen from './src/screens/MainScreen/MainScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const theme = {
  ...DefaultTheme,
  colors : {
    ...DefaultTheme.colors,
    ...Colors
  }
};
export type AppStackParamList = {
  MainScreen: undefined;
  LoginScreen: undefined;
  App: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <Provider store={store}>
        <NavigationContainer >
          <QueryClientProvider client={queryClient}>
            <Stack.Navigator initialRouteName='MainScreen' screenOptions={{ headerShown : false}}>
              <Stack.Screen name="MainScreen" component={MainScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="App" component={AppFollow} />
            </Stack.Navigator>
          </QueryClientProvider>
          </NavigationContainer>
        </Provider>
      </PaperProvider>
    </GestureHandlerRootView>
  )
}

export default App