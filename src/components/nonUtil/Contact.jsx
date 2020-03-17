import React from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import Error from './Error';


import './_Contact.scss';

const submitMessage = React.createRef();
const submitMessageError = React.createRef();

const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .max(80, 'Doit être inférieur à 80 caractères')
    .required('Champ requis'),

  lastname: Yup.string()
    .max(80, 'Doit être inférieur à 80 caractères')
    .required('Champ requis'),

  subject: Yup.string()
    .max(80, 'Doit être inférieur à 80 caractères')
    .required('Champ requis'),

  telephone: Yup.string()
    .max(12, 'Doit être inférieur à 12 caractères'),

  email: Yup.string()
    .email('Veuillez fournir un e-mail valide')
    .required('Champ requis'),

  message: Yup.string()
    .required('Champ requis'),
});

class Contact extends React.Component {
  render() {
    return (
      <div id="sectionContact" className="mainDiv">
        <div className="content" id="contact">
          <div id="contentContact">
            <h1>Contact</h1>

            <Formik
              initialValues={{
                firstname: '',
                lastname: '',
                subject: '',
                telephone: '',
                email: '',
                message: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const userId = 'user_jiJDbZSqg02CF9wrIHcy3';
                const service_id = 'gmail';
                const template_id = 'template_XFl8XDIA';

                const submitMsg = submitMessage.current;
                const submitMsgError = submitMessageError.current;

                setSubmitting(true);

                emailjs.send(service_id, template_id, values, userId)
                  .then((res) => {
                    submitMsg.style.display = 'block';

                    resetForm();
                    setSubmitting(false);
                  })

                  // Handle errors here however you like, or use a React error boundary
                  .catch((err) => {
                    submitMsgError.style.display = 'block';
                  });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (

                <form onSubmit={handleSubmit}>
                  <div className="formRow">
                    <div>
                      <input
                        type="text"
                        placeholder="Prénom"
                        name="firstname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstname}
                        className={
                        touched.firstname && errors.firstname
                          ? 'has-error'
                          : null
                        }
                      />
                      <Error
                        touched={touched.firstname}
                        message={errors.firstname}
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Nom de famille"
                        name="lastname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastname}
                        className={
                        touched.lastname && errors.lastname
                          ? 'has-error'
                          : null
                        }
                      />
                      <Error
                        touched={touched.lastname}
                        message={errors.lastname}
                      />
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="Sujet"
                    name="subject"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subject}
                    className={
                        touched.subject && errors.subject
                          ? 'has-error'
                          : null
                        }
                  />
                  <Error touched={touched.subject} message={errors.subject} />

                  <input
                    type="text"
                    placeholder="Téléphone"
                    name="telephone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.telephone}
                    className={
                    touched.telephone && errors.telephone
                      ? 'has-error'
                      : null
                    }
                  />
                  <Error
                    touched={touched.telephone}
                    message={errors.telephone}
                  />


                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={
                        touched.email && errors.email
                          ? 'has-error'
                          : null
                        }
                  />
                  <Error touched={touched.email} message={errors.email} />

                  <textarea
                    placeholder="Message"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    className={
                        touched.message && errors.message ? 'has-error' : null
                      }
                  />
                  <Error touched={touched.message} message={errors.message} />

                  <button
                    type="submit"
                    name="submit"
                    value="submit"
                    disabled={isSubmitting}
                    id="submit"
                  >
                    {' '}
Envoyer
                  </button>

                  <div id="message-submit" ref={submitMessage}><span>Courriel envoyé avec succès!</span></div>
                  <div id="message-submit-error" ref={submitMessageError}><span>Désolé, il y a eu une erreur. S'il vous plaît essayer de nouveau dans quelques minutes...</span></div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
