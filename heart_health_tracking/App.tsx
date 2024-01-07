import React from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StateContext } from './__Context/StateContext';
import { DashBoard } from './__Screens/Screens_List'
const Stack = createNativeStackNavigator();
const App = () =>{
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='flex-1'>
          <StateContext>
            <Stack.Navigator initialRouteName='DashBoardScreen'>
              <Stack.Screen name='DashBoardScreen' component={DashBoard} options={{ headerShown : false}}/>
            </Stack.Navigator>
          </StateContext>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}


export default App;