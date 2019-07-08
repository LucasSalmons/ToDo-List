import * as ActionTypes from './ActionTypes';

export const Tasks = (state = {
    isLoading: true,
    errMess: null,
    tasks: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TASKS:
            return { ...state, isLoading: false, errMess: null, tasks: action.paylaod };

        case ActionTypes.TASKS_FAILED:
            return { ...state, isLoading: false, errMess: action.paylaod };

        case ActionTypes.ADD_TASK:
            let task = action.paylaod;
            return { ...state, tasks: state.tasks.concat(task) };

        default:
            return state;
    }
};
