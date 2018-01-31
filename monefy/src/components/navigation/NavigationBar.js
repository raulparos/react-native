import React from 'react';
import { TouchableOpacity, StyleSheet, View, Button, Text } from 'react-native';
import { AsyncStorage } from 'react-native';

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.verifyUserLoggedIn();
    }

    verifyUserLoggedIn = () => {

    };

    logout = () => {
        AsyncStorage.removeItem('@User:username');
        this.props.navigation.navigate('Home');
    };

    home = () => {
        this.props.navigation.navigate('Finances');
    };

    addFinance = () => {
        this.props.navigation.navigate('Transaction');
    };

    chart = () => {
        this.props.navigation.navigate('Chart');
    };

    render() {
        return (
            <View style={styles.navbar}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.home}>
                    <Text style={{color: '#fff'}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.addFinance}>
                    <Text style={{color: '#fff'}}>Add Finance</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.chart}>
                    <Text style={{color: '#fff'}}>Chart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.logout}>
                    <Text style={{color: '#fff'}}>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navbar: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxHeight: 60,
    },
    button: {
        backgroundColor: '#04BEA6',
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        margin: 10,
    }
});