import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Control, Form } from 'react-redux-form';

import { postTask } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

class Todo extends Component {


    handeSubmit = (values) => {
        postTask(values);
        actions.reset('task');
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
            </div>
        )
    }
}
export default Todo;