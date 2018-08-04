import React from 'react'
import PropTypes from 'prop-types'
import * as yup from 'yup'
import { Formik } from 'formik'
import style from './style.scss'

const suscribeOperation = async (values, api, getTranslation) => {
  try {
    const res = await fetch(`${process.env.API_URL}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: values.email })
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

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please add a valid email address')
    .required('Please add an email address')
})

const Suscribe = ({ getTranslation }) => (
  <div className="container">
    <h6>{getTranslation('contact.subscribe')}</h6>

    <div className="suscribe-container">
      <Formik
        validateOnChange
        validateOnSubmit
        onSubmit={(values, api) =>
          suscribeOperation(values, api, getTranslation)
        }
        enableReinitialize
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        render={api => (
          <form onSubmit={api.handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder={getTranslation('contact.enterEmail')}
              className="suscribe-input"
              value={api.values.email}
              onChange={api.handleChange}
              onBlur={api.handleBlur}
              data-invalid={api.touched.email && !!api.errors.email}
            />

            <button
              type="button"
              className="suscribe-button"
              onClick={api.submitForm}
            >
              {getTranslation('contact.submit')}
            </button>
          </form>
        )}
      />
    </div>
    <style jsx>{style}</style>
  </div>
)

Suscribe.propTypes = {
  getTranslation: PropTypes.func
}

export { Suscribe }
