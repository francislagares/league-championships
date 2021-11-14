import React, { useState } from 'react';
import { doc, getDocs, query, setDoc, where } from '@firebase/firestore';
import { CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import { Fade } from 'react-awesome-reveal';
import * as Yup from 'yup';
import { promotionsCollection } from 'config/firebase';
import { showSuccessToast, showErrorToast } from 'utils/tools';

const Enroll = () => {
  const [loading, setLoading] = useState(false);

  const submitForm = async (values: { email: string }) => {
    try {
      const isOnTheList = query(
        promotionsCollection,
        where('email', '==', values.email),
      );
      const querySnapshot = await getDocs(isOnTheList);

      if (querySnapshot.docs.length >= 1) {
        showErrorToast('Sorry you are on the list already');
        setLoading(false);
        return false;
      }

      await setDoc(doc(promotionsCollection), { email: values.email });
      formik.resetForm();
      setLoading(false);

      showSuccessToast('Congratulations !!!');
    } catch (error: any) {
      showErrorToast(error);
    }
  };

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email')
        .required('The email is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      submitForm(values);
    },
  });

  return (
    <Fade>
      <div className='enroll_wrapper'>
        <form onSubmit={formik.handleSubmit}>
          <div className='enroll_title'>Enter your email</div>
          <div className='enroll_input'>
            <input
              type='email'
              name='email'
              placeholder='Enter your email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className='error_label'>{formik.errors.email}</div>
            )}

            {loading ? (
              <CircularProgress color='secondary' className='progress' />
            ) : (
              <button>Enroll now</button>
            )}
            <div className='enroll_disclaimer'>
              Error atque ad nostrum quod illum veritatis aperiam harum
              explicabo
            </div>
          </div>
        </form>
      </div>
    </Fade>
  );
};

export default Enroll;
