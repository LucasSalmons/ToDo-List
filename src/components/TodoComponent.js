import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Control, Form } from 'react-redux-form';

import { connect } from 'react-redux';
import { postTask } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => ({
    postTask: (task) => dispatch(postTask(task)),
    resetTaskForm: () => { dispatch(actions.reset('tasks')) }
});

class Todo extends Component {


    handeSubmit = (values) => {
        this.props.postTask(values);
        this.props.resetTaskForm();
    }

    render() {
        return (
            <div>
                <Form model="tasks" onSubmit={(values) => this.handeSubmit(values)}>
                    <Control.text model=".taskname" id="taskname" name="taskname"
                        placeholder="Enter a task for today"
                        className="form-control"
                    />
                    <Button type="submit" color="primary">Add</Button>
                </Form>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);