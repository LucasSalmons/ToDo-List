import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

import { EmptyTodo } from './todoList';
import { Tasks } from './tasks';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            tasks: Tasks,
            ...createForms({
                todo: EmptyTodo
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}