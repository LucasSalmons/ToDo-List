import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Control, Form } from 'react-redux-form';

import { connect } from 'react-redux';
import { postTask, fetchTasks } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => ({
    postTask: (task) => dispatch(postTask(task)),
    resetTaskForm: () => { dispatch(actions.reset('task')) },
    fetchTasks: () => { dispatch(fetchTasks()) }
});

const RenderTask = (props) => {
    return (
        <div>
            <h3>Tasks</h3>
            <ul className="list-unstyled">
                {props.tasks.tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            <p>{task.taskname}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
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
                <RenderTask tasks={this.props.tasks} />
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);