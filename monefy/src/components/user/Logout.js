import React from 'react';
import { View, Button, TextInput, Text } from 'react-native';
import { AsyncStorage } from 'react-native';

export default class Logout extends React.Component {
    constructor(props) {
        super(props);
    }

    logout = () => {
        AsyncStorage.removeItem('@User:username');
        this.props.navigation.navigate('Home');
    };

    render() {
        return (
            <View>
                <Button
                    onPress={this.logout}
                    title="Logout"
                />
            </View>
        );
    }
}