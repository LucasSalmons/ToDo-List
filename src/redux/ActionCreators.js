// import * as ActionTypes from './ActionTypes';
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
        .then(response => { console.log('task', response) })
        .catch(error => {
            console.log('post task', error.message);
            alert('Your task could not be posted\nError: ' + error.message);
        });
}
