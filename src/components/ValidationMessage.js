import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import Yahtzee from './Yahtzee';

import './ValidationMessage.css';

class ValidationMessage extends Component {

    generateMessages = () => {

        const { 
            messages,
            yahtzee
        } = this.props;

        if (yahtzee) {
            return <Yahtzee />
        } else {
            return messages.map((message, idx) => (
                <div className="validation-message" key={idx}>
                    <Alert variant={message.variant}>
                        <strong>{message.label}</strong> {message.message}
                    </Alert>
                </div>
            ));
        }
    }

    render() {
        return this.generateMessages();
    }
}

export default ValidationMessage;