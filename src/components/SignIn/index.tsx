import React, { useState } from 'react';

import { CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';

import * as Yup from 'yup';

const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required(),
      password: Yup.string().required('Invalid password').min(10, ''),
    }),
    onSubmit: values => {
      setLoading(true);
      console.log(values);
    },
  });
  return (
    <div className='container'>
      <div className='signin_wrapper' style={{ margin: '100px' }}>
        <form onSubmit={formik.handleSubmit}>
          <h2>Please login</h2>
          <input
            type='text'
            name='email'
            placeholder='Email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className='error_label'>{formik.errors.email}</div>
          )}
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className='error_label'>{formik.errors.password}</div>
          )}

          {loading ? (
            <CircularProgress color='secondary' className='progress' />
          ) : (
            <button type='submit'>Log in</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
