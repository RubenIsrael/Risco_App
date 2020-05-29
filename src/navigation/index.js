import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

import {
    HOME,
    PROFILE
} from '../consts/screens';

const Drawer = createDrawerNavigator();

export default function SlideMenu(){
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName={HOME}>
                <Drawer.Screen name={HOME} component={Home} />
                <Drawer.Screen name={PROFILE} component={Profile} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
