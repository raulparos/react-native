import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Login extends React.Component {
    static navigationOptions = {
        title: 'Login'
    };

    render() {
        return (
            <Button
                onPress={
                     () => {

                     }
                }
                title = "Login"
            />
        );
    }
}