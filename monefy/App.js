import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logout from './src/components/user/Logout';
import { StackNavigator } from 'react-navigation';
import Login from './src/components/user/Login';
import Finances from './src/components/finances/Finances';

const Navigation = StackNavigator(
    {
        Home: {screen: Login},
        Finances: {screen: Finances},
        Logout: {screen: Logout}
    },
    {
        headerMode: 'screen',
    }
);

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <Navigation/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
