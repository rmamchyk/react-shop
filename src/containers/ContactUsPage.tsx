import React, { Component } from 'react';
import ContactUs from '../components/ContactUs';

interface IState {
    name: string;
    email: string;
    reason: string;
    notes: string;
}

class ContactUsPage extends Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            name: '',
            email: '',
            reason: '',
            notes: ''
        }
    }

    private handleNameChange = (name: string) => {
        this.setState({ name });
    };

    private handleEmailChange = (email: string) => {
        this.setState({ email });
    };

    private handleReasonChange = (reason: string) => {
        this.setState({ reason });
    };

    private handleNotesChange = (notes: string) => {
        this.setState({ notes });
    };

    public render() {
        const { name, email, reason, notes } = this.state;

        return (
            <div className="page-container">
                <h1>Contact Us</h1>
                <p>If you enter your details we'll get back to you as soon as we can.</p>
                <ContactUs
                    name={name}
                    email={email}
                    reason={reason}
                    notes={notes}
                    onNameChange={this.handleNameChange}
                    onEmailChange={this.handleEmailChange}
                    onReasonChange={this.handleReasonChange}
                    onNotesChange={this.handleNotesChange}
                />
            </div>
        )
    }
}

export default ContactUsPage;