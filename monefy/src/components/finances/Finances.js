import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';

export default class Login extends React.Component {
    static navigationOptions = {
        title: 'Monefy',
        headerStyle: {backgroundColor: '#04BEA6'},
        titleStyle: {color: '#fff'}
    };

    constructor() {
        super();
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
        this.getAllTransactions();
    }

    getAllTransactions = () => {
        let response = fetch('http://192.168.0.100:8080/transaction/getAll?sessionToken=user', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json())
            .then((responseData) =>
            {
                let newDataSource = this.state.dataSource.cloneWithRows(responseData.data);
                this.setState({dataSource: newDataSource});
            });
    };

    showRowData = (rowData) => {
        var style = styles.red;
        if (rowData.type == 0) {
            style = styles.green;
        }
        var date = new Date(parseInt(rowData.date));
        return (
            <View style={style}>
                <Text style={styles.text}>Date: {date.toDateString() + " " + date.toTimeString()}</Text>
                <Text style={styles.text}>Amount: {rowData.amount}</Text>
                <Text style={styles.text}>Description: {rowData.description}</Text>
                <Text style={styles.text}>Location: {rowData.location}</Text>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    {'Finances transaction history \n\n'}
                </Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.showRowData(rowData)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleText: {
        color: '#ccc',
    },
    red: {
        backgroundColor: '#ff6d6d',
        borderBottomWidth: 1,
        borderColor: '#fff',
    },
    green: {
        backgroundColor: '#91ffcb',
        borderBottomWidth: 1,
        borderColor: '#fff',
    },
    text: {
        color: '#000',
    }
});
