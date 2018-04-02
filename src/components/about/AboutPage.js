import React, { Component } from 'react';

class AboutPage extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>Centelon BOT application will help you to search vacancy in our organization</p>
                <hr />
                <h3>Technologies: </h3>
                <ul>
                    <li>Dialogflow</li>
                    <li>NodeJs</li>
                    <li>Angular 2</li>
                    <li>AWS: S3, SES, DynamoDB, Lambda, Serverless</li>                    
                    <li>CSS, Bootstrap</li>
                </ul>
            </div>
        );
    }
}

export default AboutPage;