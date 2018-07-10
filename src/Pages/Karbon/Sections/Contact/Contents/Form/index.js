import React from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import style from './style.scss'
import { Karbon } from '../../../../../../styles/core'
import { TextField } from '@react-core/textfield'
import { Textarea } from '@react-core/textarea'
import { Button } from '@react-core/button'

const contactOperation = async (values, api) => {
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
      alert('Contact message sended successfully!')
    } else throw res
  } catch (e) {
    const error = await e.text()
    alert(error)
  }
}

const validationSchema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Please enter your email address'),
  message: yup.string().required('Please enter your message')
})

const Form = () => (
  <div className="container">
    <Formik
      validateOnChange
      validateOnSubmit
      onSubmit={(values, api) => contactOperation(values, api)}
      enableReinitialize
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={validationSchema}
      render={api => (
        <form onSubmit={api.handleSubmit}>
          <TextField
            type="name"
            name="name"
            label={'Yor Name'}
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
            label={'Yor Email'}
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
            label={'Your Message'}
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
            label={'Submit'}
          />
        </form>
      )}
    />
    <style jsx>{style}</style>
  </div>
)

export { Form }
