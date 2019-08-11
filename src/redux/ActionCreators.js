import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../baseUrl';

export const postTask = (task) => (dispatch) => {

    return fetch(baseUrl + 'tasks', {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin",
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(addTask(response)))
        .catch(error => {
            console.log('post task', error.message);
            alert('Your task could not be posted\nError: ' + error.message);
        });
}
//tasks
export const fetchTasks = () => (dispatch) => {
    dispatch(tasksLoading(true));

    return fetch(baseUrl + 'tasks')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(tasks => dispatch(addTasks(tasks)))
        .catch(error => dispatch(tasksFailed(error.message)));
};

export const tasksLoading = () => ({
    type: ActionTypes.TASKS_LOADING
});

export const tasksFailed = (errmess) => ({
    type: ActionTypes.TASKS_FAILED,
    payload: errmess
});

export const addTasks = (tasks) => ({
    type: ActionTypes.ADD_TASKS,
    payload: tasks
});

export const addTask = (task) => ({
    type: ActionTypes.ADD_TASK,
    payload: task
});
