import React from 'react';
import ReactDOM from 'react-dom';
import Field from './field';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

const reducers = combineReducers({
    field: () => ({ value: 'Opa' })
});

ReactDOM.render(
    <Provider store={createStore(reducers)} >
    <Field initialValue='Teste'/>
     </ Provider>
    , document.getElementById('app'));

