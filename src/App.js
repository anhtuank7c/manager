import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAvcf9m59dlwQZPO08j3LLG1Th4JUwf38k',
            authDomain: 'manager-d17d5.firebaseapp.com',
            databaseURL: 'https://manager-d17d5.firebaseio.com',
            storageBucket: 'manager-d17d5.appspot.com',
            messagingSenderId: '964283841571'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
