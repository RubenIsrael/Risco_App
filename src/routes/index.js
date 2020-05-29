import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import {
    LOADING_PAGE,
    LOGIN,
    HOME,
    REGISTER,
    PROFILE
} from '../consts/screens';

import LoadingPage from '../screens/LoadingPage';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

function MyStack() {
    return (
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name={LOADING_PAGE} component={LoadingPage} />
        <Stack.Screen name={LOGIN} component={Login} />
        <Stack.Screen name={HOME} component={Home} />
        <Stack.Screen name={REGISTER} component={Register} />
        <Stack.Screen name={PROFILE} component={Profile} />
      </Stack.Navigator>
    );
  }

export default function Routes(){
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
}