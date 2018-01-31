import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/components/user/Login';
import Finances from './src/components/finances/Finances';
import Chart from './src/components/finances/Chart';
import Transaction from './src/components/finances/Transaction';

const Navigation = StackNavigator(
    {
        Home: {screen: Login},
        Finances: {screen: Finances},
        Transaction: {screen: Transaction},
        Chart: {screen: Chart},
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
