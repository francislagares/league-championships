import React, { useState } from 'react';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { CircularProgress } from '@mui/material';
import { useFormik } from 'formik';

import * as Yup from 'yup';
import { auth } from 'config/firebase';
import { showErrorToast, showSuccessToast } from 'utils/tools';

const SignIn = (props: any) => {
  const [loading, setLoading] = useState(false);

  const submitForm = async (values: { email: string; password: string }) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      ).then(() => {
        showSuccessToast('Welcome Back  !');
        props.history.push('/dashboard');
      });
    } catch (error) {
      setLoading(false);
      showErrorToast('Invalid user or password!');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: 'francis@gmail.com',
      password: 'password1234',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required(),
      password: Yup.string().required().min(10, 'Invalid password'),
    }),
    onSubmit: values => {
      setLoading(true);
      submitForm(values);
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
