import React, { Component } from 'react';
import TaskList from './TaskListComponent';
import { connect } from 'react-redux';

import { postTask } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}
const mapDispatchToProps = (dispatch) => ({
    postTask: (todo) => dispatch(postTask(todo))
});

class Main extends Component {

    render() {
        return (
            <div>
                <h1>This is a To-do list</h1>
                <TaskList />
            </div>
        );
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(Main));