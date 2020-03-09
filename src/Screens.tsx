import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './home/Home';
import { DetailsScreen } from './details/Details';

const RootStack = createStackNavigator();

export function Screens(): React.ReactElement {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Overview' }}/>
            <RootStack.Screen
                name="Details"
                component={DetailsScreen}
            />
        </RootStack.Navigator>
    );
}
