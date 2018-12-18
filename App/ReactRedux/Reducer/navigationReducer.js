import RootNavigator from '../../Until/RootNavigator';

const initialState = RootNavigator.router.getStateForAction(
    RootNavigator.router.getActionForPathAndParams("MainTab")
);

const navigationReducer = (state = initialState, action) => {
    const newState = RootNavigator.router.getStateForAction(action, state);
    return newState || state;
};

export default navigationReducer;