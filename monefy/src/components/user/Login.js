import React from 'react';
import { View, Button, TextInput, Text } from 'react-native';
import { AsyncStorage } from 'react-native';
import Logout from './Logout';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password: ''
        };
    }

    static navigationOptions = {
        title: 'Login'
    };

    login = () => {
        fetch('http://192.168.0.100:8080/user/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }).then((response) => response.json())
            .then((responseData) => {
                this.saveStorageInformation(responseData);
            });
    };

    saveStorageInformation = (response) => {
        if (response.successful) {
            try {
                //@todo await async function
                AsyncStorage.setItem('@User:username', response.data.name);
                this.props.navigation.navigate('Logout');
            } catch (error) {
            }
        }
    };

    render() {
        return (
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({email: text})}
                    placeholder={'Please enter your email'}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({password: text})}
                    placeholder={'Please enter your password'}
                />
                <Button
                    onPress={this.login}
                    title="Login"
                />
            </View>
        );
    }
}