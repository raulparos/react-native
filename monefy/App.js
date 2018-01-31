import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/user/Login';
import Logout from './src/components/user/Logout';
import { StackNavigator } from 'react-navigation';

const Navigation = StackNavigator(
    {
        Home: {screen: Login},
        Logout: {screen: Logout}
    },
    {
        headerMode: 'float',
    }
);

export default class App extends React.Component {
    render() {
        return (
            <Navigation/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
