import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

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
