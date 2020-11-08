import React from 'react'
import { Field, reduxForm } from 'redux-form'

const renderField = (props) => {
    const { placeholder, type, id, input, meta: { error, touched } } = props
    return <>
        <input id={id} {...input} type={type} placeholder={placeholder}></input>
        {error && touched && <div>{error}</div>}
    </>
}

let ContactForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='firstName'>First name </label>
            <Field id="firstName" name='firstName' component={renderField} type='text' placeholder="First Name"></Field>
        </div>
        <div>
            <label htmlFor='lastName'>Last name </label>
            <Field id='lastName' name='lastName' component={renderField} type='text' placeholder="Last Name"></Field>
        </div>
        <div>
            <label htmlFor='email'>Email </label>
            <Field id='email' name='email' component={renderField} type='email' placeholder="Email"></Field>
        </div>
        <div>
            <label>Sex</label>
            <div style={{ display: "inline-block" }}>
                <label>
                    <Field name="sex" component="input" type="radio" value="male"></Field>
                Male</label>
                <label>
                    <Field name="sex" component="input" type="radio" value="female"></Field>
                Female</label>
                <label>
                    <Field name="sex" component="input" type="radio" value="other"></Field>
                Other</label>
            </div>
        </div>
        <div>
            <label>Favorite Color </label>
            <Field name="favoriteColor" component="select">
                <option />
                <option value="ff0000">Red</option>
                <option value="00ff00">Green</option>
                <option value="0000ff">Blue</option>

            </Field>
        </div>
        <div>
            <label htmlFor="employed">Employed </label>
            <Field name="employed" id="employed" component="input" type="checkbox"></Field>
        </div>
        <div>
            <label>Notes </label>
            <Field name="notes" component="textarea"></Field>
        </div>
        <button style={{ marginRight: "10px" }} type='submit' disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
    </form>
}

const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length > 20) {
        errors.firstName = 'Must be 20 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less'
    }


    return errors
}

ContactForm = reduxForm({ form: 'contact', validate })(ContactForm)

export default ContactForm