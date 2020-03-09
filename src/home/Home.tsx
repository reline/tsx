import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

type HomeProps = NavigationInjectedProps<{}>;

export function HomeScreen(props: HomeProps): React.ReactElement {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => props.navigation.navigate('Details')}
            />
        </View>
    );
}
