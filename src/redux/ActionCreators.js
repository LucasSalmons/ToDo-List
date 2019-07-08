import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchTasks = () => (dispatch) => {

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

export const postTask = (todo) => (dispatch) => {

    return fetch(baseUrl + 'todo', {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
            "content-Type": "application/json"
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
        .then(response => { console.log('To-do', response); alert('To-do ask added') })
        .catch(error => {
            console.log('post todo', error.message);
            alert('Your task could not be added\nError: ' + error.message);
        });
};