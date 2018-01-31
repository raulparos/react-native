import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import NavigationBar from '../navigation/NavigationBar';
import SimpleChart from './SimpleChart';

export default class Chart extends React.Component {
    static navigationOptions = {
        title: 'Monefy',
        headerStyle: {backgroundColor: '#04BEA6'},
        titleStyle: {color: '#fff'}
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar navigation={this.props.navigation}/>
                <SimpleChart/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
});
