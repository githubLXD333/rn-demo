import React, {Component} from 'react';
import { View, Button } from 'react-native';
import NavigationService from '../Navigation/NavigationService';

export default class TestView extends Component {
    render() {
        return (
            <View>
                <Button
                    onPress={() => {
                        NavigationService.navigate('Detail', {});
                    }}
                    title='Go to details'
                />
            </View>
        )
    }
}