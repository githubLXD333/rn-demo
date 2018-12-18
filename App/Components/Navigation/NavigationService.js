import { NavigationActions } from 'react-native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator._navigation.navigate(routeName, params);
    // _navigator.dispatch(
    //     NavigationActions.navigate({
    //         routeName,
    //         params,
    //     })
    // );
}

export default {
    navigate,
    setTopLevelNavigator,
};

