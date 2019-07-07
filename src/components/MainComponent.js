import React, { Component } from 'react';
import { Control, Form } from 'react-redux-form';
import { Button, Row, Col, Label } from 'reactstrap';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        task: state.task
    }
}

class Main extends Component {

    render() {
        return (
            <div>
                <h1>This is a To-do list</h1>
                <Form>
                    <Row>
                        <Label htmlFor="task">Task:</Label>
                        <Col>
                            <Control.text id="task" name="task"
                                placeholder="Title"
                                className="form-control" />
                            <Button type="submit" color="primary">
                                Add Task
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Main);