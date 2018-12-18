import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import TestView from '../../Components/Home/testButton';
import { Alert } from 'react-native';

export default class Home extends Component {
    componentDidMount() {
        // Alert.alert('更新', 'Production', [
        //     { text: '热更新 --- 知道了', onPress: ()=>{} }
        // ]);
    }

    render() {
        console.log('Home page rerender!!!');
        const { navigation } = this.props;
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize: 28, color: 'red'}}>{'......'}</Text>
                
                <TestView />

                <Text style={{marginTop: 60, fontSize: 30, color: 'green'}} >dragosoft</Text>
            </View>
        )
    }
}