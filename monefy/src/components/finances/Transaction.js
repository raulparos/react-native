import React from 'react';
import { StyleSheet, View, Button, TextInput, Picker } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import NavigationBar from "../navigation/NavigationBar";

export default class Transaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount : '',
            description : '',
            location : '',
            type : 0
        };
    }

    static navigationOptions = {
        title: 'Add Finance',
        headerStyle: {backgroundColor: '#04BEA6'},
        titleStyle: {color: '#fff'}
    };

    refreshState = () => {
        this.setState({amount : ''});
        this.setState({description : ''});
        this.setState({location : ''});

    };

    addTransaction = () => {
        fetch('http://192.168.0.100:8080/transaction/add', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount : this.state.amount,
                date : new Date(),
                description : this.state.description,
                location : this.state.location,
                type : this.state.type
            })
        }).then((response) => response.json())
            .then((responseData) => {
                if (responseData.successful) {
                    this.dropdown.alertWithType('success', 'Success', 'Transaction was added successfully.');
                } else {
                    this.dropdown.alertWithType('error', 'Error', 'There was a problem. Try again.');
                }
                this.refreshState();
            });
    };

    render() {
        return (
            <View style={styles.container}>
                <DropdownAlert ref={ref => this.dropdown = ref}/>
                <NavigationBar navigation={this.props.navigation}/>
                <TextInput
                    style={{height: 40, marginTop: 60, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({amount: text})}
                    value = {this.state.amount}
                    placeholder={'Amount'}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({description: text})}
                    value = {this.state.description}
                    placeholder={'Short Description'}
                />
                <TextInput
                    ref={'textInput2'}
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({location: text})}
                    value = {this.state.location}
                    placeholder={'Location'}
                />
                <Picker
                    selectedValue={this.state.type}
                    onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
                    <Picker.Item label="Income" value="0" />
                    <Picker.Item label="Expense" value="1" />
                </Picker>
                <Button
                    onPress={this.addTransaction}
                    title="Add finance"
                />
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