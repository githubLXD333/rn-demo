import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

export default class Profile extends Component {
    render() {
        console.log('Profile page rerender!!!');
        const { navigation } = this.props;
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile Screen</Text>
                <Button
                    onPress={() => navigation.navigate('Detail', {detailId: 123})}
                    title='Go to details'
                />
            </View>
        )
    }
}