// Success.jsx
import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class Success extends Component{

    render(){
        const {values: { jobName, projects, totalPoints, minProjects, maxPoints, instructions }} = this.props;
        var jsonvals = {
            jobName: jobName,
            projects: projects,
            totalPoints: totalPoints,
            minProjects: minProjects,
            maxPoints: maxPoints,
            instruction: instructions
        }
        var jsonStr = JSON.stringify(jsonvals);
        return(
            <div>
                <h1 className="ui centered">Generated JSON object</h1>
                <p>JSON object to submit to the db endpoint:</p>
                <p>{jsonStr}</p>
            </div>
        )
    }
}

export default Success;
