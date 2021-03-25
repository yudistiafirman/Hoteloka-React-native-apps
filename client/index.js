
/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React,{useEffect} from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/redux/reducers/index'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))



const index = () => {
   
    return <Provider store={store}>
        <App />
    </Provider>
}

AppRegistry.registerComponent(appName, () => index);
