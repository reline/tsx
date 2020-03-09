import 'react-native-gesture-handler';
import React from 'react';
// fixme: enable absolute imports at runtime
import { Screens } from './Screens';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
        <NavigationContainer>
            <Screens/>
        </NavigationContainer>
    );
}
