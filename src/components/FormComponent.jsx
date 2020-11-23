import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from '../common/formControls/validators'
import styles from './form.module.css'

const renderField = (props) => {
    const { className, placeholder, type, id, input, meta: { error, touched } } = props
    return <>
        <input className={className} id={id} {...input} type={type} placeholder={placeholder}></input>
        {error && touched && <div className={styles.form__error}><i class="fas fa-exclamation-circle"></i>{error}</div>}
    </>
}

let ContactForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form__title}>Registration</div>
        <div className={styles.form__group}>
            <Field className={styles.form__input + ' ' + styles.form__input_transparent} id="firstName" name='firstName' component={renderField} type='text' placeholder=" " validate={[required]}></Field>
            <label className={styles.form__label + ' ' + styles.label} htmlFor='firstName'>First name </label>
        </div>
        <div className={styles.form__group}>
            <Field className={styles.form__input + ' ' + styles.form__input_transparent} id='lastName' name='lastName' component={renderField} type='text' placeholder=" "></Field>
            <label className={styles.form__label + ' ' + styles.label} htmlFor='lastName'>Last name </label>
        </div>
        <div className={styles.form__group}>
            <Field className={styles.form__input + ' ' + styles.form__input_transparent} id='email' name='email' component={renderField} type='email' placeholder=" "></Field>
            <label className={styles.form__label + ' ' + styles.label} htmlFor='email'>Email </label>
        </div>
        <div className={styles.form__group + ' ' + styles.form__block}>
            <label className={styles.form__label}>Sex</label>
            <div className={styles.form__sexBlock}>
                <Field className={styles.form__input} id="male" name="sex" component="input" type="radio" value="male"></Field>
                <label htmlFor="male">Male</label>
            </div>
            <div className={styles.form__sexBlock}>
                <Field className={styles.form__input} id="female" name="sex" component="input" type="radio" value="female"></Field>
                <label htmlFor="female">Female</label>
            </div>
        </div>
        <div className={styles.form__group + ' ' + styles.form__block}>
            <label className={styles.form__label}>Favorite Color </label>
            <Field className={styles.form__input} name="favoriteColor" component="select">
                <option />
                <option value="ff0000">Red</option>
                <option value="00ff00">Green</option>
                <option value="0000ff">Blue</option>
            </Field>
        </div>
        <div className={styles.form__group + ' ' + styles.form__block}>
            <label className={styles.form__label} htmlFor="employed">Employed </label>
            <Field className={styles.form__input} name="employed" id="employed" component="input" type="checkbox"></Field>
        </div>
        <div className={styles.form__group}>
            <Field className={styles.form__input + ' ' + styles.form__input_transparent} name="notes" component="textarea" placeholder=" "></Field>
            <label className={styles.form__label + ' ' + styles.label}>Notes </label>
        </div>
        <div className={styles.form__groupBtn}>
            <button className={styles.form__submit} type='submit' disabled={submitting}>Submit</button>
            <button className={styles.form__reset} type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
    </form>
}

const validate = values => {
    const errors = {}
    if (values.firstName && values.firstName.length > 15) {
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