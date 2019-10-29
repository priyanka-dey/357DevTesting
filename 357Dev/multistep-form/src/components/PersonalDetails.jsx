// PersonalDetails.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { throws } from 'assert';

class PersonalDetails extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
        <Form color='blue' >
            <h1 className="ui centered">Further details</h1>
            <Form.Field>
                <label>Total Points</label>
                <input placeholder='e.g. 100'
                onChange={this.props.handleChange('totalPoints')}
                defaultValue={values.totalPoints}
                />
            </Form.Field>
            <Form.Field>
                <label>Minimum Number of Projects Student Should Select</label>
                <input placeholder='e.g. 3'
                onChange={this.props.handleChange('minProjects')}
                defaultValue={values.minProjects}
                />
            </Form.Field>
            <Form.Field>
                <label>Maximum Number of Points Students Can Assign to a Project</label>
                <input placeholder='e.g. 50'
                onChange={this.props.handleChange('maxPoints')}
                defaultValue={values.maxPoints}
                />
            </Form.Field>
            <Form.Field>
                <label>Instructions</label>
                <input placeholder='somehow need to make this wrap around bc right now very ugly'
                onChange={this.props.handleChange('instructions')}
                defaultValue={values.instructions}
                />
            </Form.Field>
            <Button onClick={this.back}>Back</Button>
            <Button onClick={this.saveAndContinue}>Save And Continue </Button>
        </Form>
        )
    }
}

export default PersonalDetails;
