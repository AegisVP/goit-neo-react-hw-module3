import css from './ContactForm.module.css';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const initialValues = { name: '', number: '' };
const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{0,6}\)[ -]?)|([0-9]{0,4})[ -]?)*?[0-9]{2,4}[ -]?[0-9]{2,4}$/;
const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).max(50).required('Name is required'),
  number: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
});

export default function ContactForm({ onSubmit }) {
  function handleSubmit(values, { resetForm }) {
    resetForm();
    onSubmit(values);
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className={css.fields}>
        <IconContext.Provider value={{ className: css.icon }}>
          <label className={css.label}>
            Name
            <Field type="text" name="name" className={css.input} />
            <ErrorMessage name="name" component="p" className={css.error} />
            <FaUser />
          </label>
          <label className={css.label}>
            Number
            <Field type="text" name="number" className={css.input} />
            <ErrorMessage name="number" component="p" className={css.error} />
            <FaPhoneAlt />
          </label>
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </IconContext.Provider>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
