/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Sentry } from 'react-native-sentry';

AppRegistry.registerComponent(appName, () => App);

Sentry.config('https://39d88e0aa0be494386e503f0c82ba1d6@sentry.io/1328285').install();

// set the tag context
Sentry.setTagsContext({
    "environment": "Staging",
    "react": true
});