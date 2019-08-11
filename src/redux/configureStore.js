import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import { Tasks } from './tasks';
import { StartingTask } from './form';
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            tasks: Tasks,
            ...createForms({
                task: StartingTask
            })
        }),
        applyMiddleware(thunk)
    );
    return store;
}