import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Control, Form } from 'react-redux-form';
import { Loading } from './LoadingComponent';

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
    if (props.isLoading) {
        return (
            <div>
                <div>
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div>
                <div>
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.tasks.tasks.length !== 0)
        return (
            <div>
                <h3>Tasks</h3>
                <ul className="list-unstyled">
                    {props.tasks.tasks.map((task) => {
                        return (
                            <li key={task.id}>
                                <p onClick={() => props.deleteTask(task)}>{task.taskname}</p>
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
                <RenderTask
                    tasks={this.props.tasks}
                    deleteTask={this.props.deleteTask}
                    isLoading={this.props.isLoading}
                    errMess={this.props.errMess} />
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);