import React from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import style from './style.scss'

const suscribeOperation = async (values, api) => {
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
      alert('Suscription successfully!')
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

const Suscribe = () => (
  <div className="container">
    <h6>Subscribe to our newsleter</h6>

    <div className="suscribe-container">
      <Formik
        validateOnChange
        validateOnSubmit
        onSubmit={(values, api) => suscribeOperation(values, api)}
        enableReinitialize
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        render={api => (
          <form onSubmit={api.handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
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
              Submit
            </button>
          </form>
        )}
      />
    </div>
    <style jsx>{style}</style>
  </div>
)

export { Suscribe }
