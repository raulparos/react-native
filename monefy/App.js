import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/login/Login';
import { StackNavigator } from 'react-navigation';

const Navigation = StackNavigator(
    {
        Home: {screen: Login}
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
