import React, { Component } from 'react';
import ContactUs from '../components/ContactUs';
import { IValues, ISubmitResult } from '../components/Form';
import { wait } from '../data/products';

class ContactUsPage extends Component<{}, {}> {
    private handleSubmit = async (values: IValues): Promise<ISubmitResult> => {
        await wait(1000); // simulate asynchronous web API call
        return {
            // errors: {
            //     email: ["Something is wrong with this"]
            // },
            // success: false
            success: true
        };
    };

    public render() {
        return (
            <div className="page-container">
                <h1>Contact Us</h1>
                <p>If you enter your details we'll get back to you as soon as we can.</p>
                <ContactUs onSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default ContactUsPage;