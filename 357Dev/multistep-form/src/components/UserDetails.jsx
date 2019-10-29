// UserDetails.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class UserDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Form >
                <h1 className="ui centered">Project Junto</h1>
                <Form.Field>
                    <label>Job Name</label>
                    <input
                    placeholder='job_xxx'
                    onChange={this.props.handleChange('jobName')}
                    defaultValue={values.jobName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Projects (maybe on another ptotalPoints of the form)</label>
                    <input
                    placeholder='Here this really needs to be a table of values haha'
                    onChange={this.props.handleChange('projects')}
                    defaultValue={values.projects}
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default UserDetails;
