import * as React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'
import { useFormik } from 'formik'
import * as yup from 'yup'

const EMAIL_REGEX = /^\S*(.com|.co.uk|.it)$/gm
const PASSWORD_REGEX =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/

const useStyles = makeStyles(theme => ({
  form: {
    '& > div': {
      marginBottom: theme.spacing(3)
    }
  }
}))

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .matches(EMAIL_REGEX, 'Allowed email domain extensions: .com, .co.uk, .it')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .matches(
      PASSWORD_REGEX,
      'Password should contain a mix of upper and lower case letters, numbers and at least one special character'
    )
    .required('Password is required')
})

export default function LoginForm({ onSubmit }) {
  const classes = useStyles()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <TextField
          fullWidth
          id="email"
          data-testid="email-input"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          data-testid="password-input"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          data-testid="submit-button"
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
