import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import { StartingTask } from './tasks';
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            ...createForms({
                task: StartingTask
            })
        }),
        applyMiddleware(thunk)
    );
    return store;
}
