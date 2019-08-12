import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Control, Form } from 'react-redux-form';

import { connect } from 'react-redux';
import { postTask, fetchTasks, deleteTask } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => ({
    postTask: (task) => dispatch(postTask(task)),
    resetTaskForm: () => { dispatch(actions.reset('task')) },
    fetchTasks: () => { dispatch(fetchTasks()) },
    deleteTask: (task) => dispatch(deleteTask(task))
});

const RenderTask = (props) => {
    if (props.tasks.tasks.length !== 0)
        return (
            <div>
                <h3>Tasks</h3>
                <ul className="list-unstyled">
                    {props.tasks.tasks.map((task) => {
                        return (
                            <li key={task.id}>
                                <p>{task.taskname}</p><button onClick={() => props.deleteTask(task)}>x</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    else
        return (
            <div></div>
        );
}

class Todo extends Component {

    componentDidMount() {
        this.props.fetchTasks()
    }

    handeSubmit = (values) => {
        this.props.postTask(values);
        this.props.resetTaskForm();
    }

    render() {
        return (
            <div>
                <Form model="task" onSubmit={(values) => this.handeSubmit(values)}>
                    <Control.text model=".taskname" id="taskname" name="taskname"
                        placeholder="Enter a task for today"
                        className="form-control"
                    />
                    <Button type="submit" color="primary">Add</Button>
                </Form>
                <RenderTask tasks={this.props.tasks} deleteTask={this.props.deleteTask} />
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);