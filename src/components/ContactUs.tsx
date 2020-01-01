import React from 'react';

interface IProps {
    name: string;
    email: string;
    reason: string;
    notes: string;
    onNameChange: (name: string) => void;
    onEmailChange: (email: string) => void;
    onReasonChange: (reason: string) => void;
    onNotesChange: (notes: string) => void;
}

const ContactUs: React.FC<IProps> = props => {
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onNameChange(e.currentTarget.value);
    };

    return (
        <form className="form" noValidate={true}>
            <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input
                    type="text"
                    id="name"
                    value={props.name}
                    onChange={handleNameChange}
                />
            </div>
        </form>
    )
}

export default ContactUs;