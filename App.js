/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import RootNavigator from './App/Until/RootNavigator';
import codePush from 'react-native-code-push';
import NavigationService from './App/Components/Navigation/NavigationService';

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    console.log('------------------------ code-push did work ------------------------');
    codePush.sync(); // 程序启动，后台请求更新
  }

  render() {
    return (
      // <Provider>
          <RootNavigator
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
      // </Provider>
    );
  }
}
