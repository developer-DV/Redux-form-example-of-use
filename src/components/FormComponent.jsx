import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactForm = props => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='firstName'>First name </label>
            <Field name='firstName' component='input' type='text'></Field>
        </div>
        <div>
            <label htmlFor='lastName'>Last name </label>
            <Field name='lastName' component='input' type='text'></Field>
        </div>
        <div>
            <label htmlFor='email'>Email </label>
            <Field name='email' component='input' type='email'></Field>
        </div>
        <button type='submit'>Submit</button>
    </form>
}

ContactForm = reduxForm({form: 'contact'})(ContactForm)

export default ContactForm