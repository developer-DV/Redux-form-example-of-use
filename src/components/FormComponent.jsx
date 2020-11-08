import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactForm = props => {
    const { handleSubmit, pristine, reset } = props
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='firstName'>First name </label>
            <Field id="firstName" name='firstName' component='input' type='text' placeholder="First Name"></Field>
        </div>
        <div>
            <label htmlFor='lastName'>Last name </label>
            <Field id='lastName' name='lastName' component='input' type='text' placeholder="Last Name"></Field>
        </div>
        <div>
            <label htmlFor='email'>Email </label>
            <Field id='email' name='email' component='input' type='email' placeholder="Email"></Field>
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
                <option/>
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
        <button style={{marginRight: "10px"}} type='submit' disabled={pristine}>Submit</button>
        <button type="button" disabled={pristine} onClick={reset}>Clear Values</button>
    </form>
}

ContactForm = reduxForm({ form: 'contact' })(ContactForm)

export default ContactForm