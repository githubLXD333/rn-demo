import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class DetailsScreen extends Component {
    render() {
        const { navigation } = this.props;

        console.log('current navigation info is:', navigation);

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(5, 49, 125, 0.8)' }}>
                <Text>Details Screen</Text>
                <Button
                    onPress={() => navigation.goBack()}
                    title='Go back'
                />
            </View>
        )
    }
}

export default DetailsScreen;