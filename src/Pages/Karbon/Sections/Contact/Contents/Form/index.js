import React from 'react'
import PropTypes from 'prop-types'
import * as yup from 'yup'
import { Formik } from 'formik'
import style from './style.scss'
import { Karbon } from '../../../../../../styles/core'
import { TextField } from '@react-core/textfield'
import { Textarea } from '@react-core/textarea'
import { Button } from '@react-core/button'

const contactOperation = async (values, api, getTranslation) => {
  try {
    const res = await fetch(`${process.env.API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message
      })
    })

    if (res.status === 200) {
      api.resetForm()
      alert(getTranslation('contact.contactedOK'))
    } else throw res
  } catch (e) {
    const error = await e.text()
    alert(error)
  }
}

const validationSchema = getTranslation => {
  return yup.object().shape({
    name: yup.string().required(getTranslation('contact.enterYourName')),
    email: yup
      .string()
      .email()
      .required(getTranslation('contact.enterYourEmail')),
    message: yup.string().required(getTranslation('contact.enterYourMessage'))
  })
}

const Form = ({ getTranslation }) => (
  <div className="container">
    <Formik
      validateOnChange
      validateOnSubmit
      onSubmit={(values, api) => contactOperation(values, api, getTranslation)}
      enableReinitialize
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={() => validationSchema(getTranslation)}
      render={api => (
        <form onSubmit={api.handleSubmit}>
          <TextField
            type="name"
            name="name"
            label={getTranslation('contact.yourName')}
            placeholder={api.errors.name}
            theme={Karbon}
            value={api.values.name}
            onChange={api.handleChange}
            onBlur={api.handleBlur}
            data-invalid={api.touched.name && !!api.errors.name}
          />

          <TextField
            type="email"
            name="email"
            label={getTranslation('contact.yourEmail')}
            placeholder={api.errors.email}
            theme={Karbon}
            value={api.values.email}
            onChange={api.handleChange}
            onBlur={api.handleBlur}
            data-invalid={api.touched.email && !!api.errors.email}
          />

          <Textarea
            type="text"
            name="message"
            label={getTranslation('contact.yourMessage')}
            placeholder={api.errors.message}
            theme={Karbon}
            value={api.values.message}
            onChange={api.handleChange}
            onBlur={api.handleBlur}
            data-invalid={api.touched.message && !!api.errors.message}
          />

          <Button
            type="button"
            theme={Karbon}
            onClick={api.submitForm}
            label={getTranslation('contact.submit')}
          />
        </form>
      )}
    />
    <style jsx>{style}</style>
  </div>
)

Form.propTypes = {
  getTranslation: PropTypes.func
}

export { Form }
