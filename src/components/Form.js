import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Form.css'

function ContactForm() {
    const [state, handleSubmit] = useForm("xoqpgnek");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label className="emailLabel" htmlFor="email">
                Email Address
      </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <br></br>
            <label className="messageLabel" htmlFor="message">
                Message
      </label>
            <textarea
                id="message"
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <br></br>
            <button className="formButton" type="submit" disabled={state.submitting}>
                Submit
      </button>
        </form>
    );
}

function App() {
    return (
        <ContactForm />
    );
}
export default App;
