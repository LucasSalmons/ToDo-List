import React, { Component } from 'react';
import { Control, Form } from 'react-redux-form';
import { Button, Row, Col, Label } from 'reactstrap';

class TaskList extends Component {

    handleSubmit = (values) => {
        this.props.postTask(values);
    }

    render() {
        return (
            <Form model="todo" onSubmit={(values) => this.handleSubmit(values)}>
                <Row>
                    <Label htmlFor="task" md={1}>Task:</Label>
                    <Col md={8}>
                        <Control.text model=".task" id="task" name="task"
                            placeholder="Title"
                            className="form-control" />
                    </Col>
                    <Button type="submit" color="primary" md={2}>Add Task</Button>
                </Row>
            </Form>
        );
    }
}

export default TaskList;