import React, { useState } from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Error from './Error';

import './_ContactModal.scss';

const submitMessage = React.createRef();
const submitMessageError = React.createRef();

const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .max(80, 'Doit être inférieur à 80 caractères')
    .required('*Prénom requis*'),

  lastname: Yup.string()
    .max(80, 'Doit être inférieur à 80 caractères')
    .required('*Nom requis*'),

  subject: Yup.string()
    .max(80, 'Doit être inférieur à 80 caractères')
    .required('*Sujet requis*'),

  telephone: Yup.string()
    .max(12, 'Doit être inférieur à 12 caractères'),

  email: Yup.string()
    .email('Veuillez fournir un e-mail valide')
    .required('*Courriel requis*'),

  message: Yup.string()
    .required('*Veuillez saisir votre message*'),
});

function ContactModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <input type="button" variant="primary" onClick={handleShow} value="Contact" />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title as="h3">Contactez-moi</Modal.Title>
        </Modal.Header>

        <div id="sectionContact" className="mainDiv">
          <div className="content" id="contact">
            <div id="contentContact">
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
                  const serviceId = 'gmail';
                  const templateId = 'template_XFl8XDIA';

                  const submitMsg = submitMessage.current;
                  const submitMsgError = submitMessageError.current;

                  setSubmitting(true);

                  emailjs.send(serviceId, templateId, values, userId)
                    .then(() => {
                      submitMsg.style.display = 'block';
                      resetForm();
                      setSubmitting(false);
                    })

                    // Handle errors here however you like, or use a React error boundary
                    .catch(() => {
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
                  <Form onSubmit={handleSubmit}>
                    <Modal.Body>

                      <Form.Row>
                        <Col xs="12" md="6">
                          <Form.Group>
                            <Form.Label>
                                Prénom
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Prénom"
                              name="firstname"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.firstname}
                              className={`${
                                touched.firstname && errors.firstname
                                  ? 'has-error'
                                  : null
                              }`}
                            />
                            <Form.Text className="text-muted">
                              <Error
                                touched={touched.firstname}
                                message={errors.firstname}
                              />
                            </Form.Text>
                          </Form.Group>
                        </Col>

                        <Col xs="12" md="6">
                          <Form.Group>
                            <Form.Label>
                                Nom
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Nom"
                              name="lastname"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.lastname}
                              className={`${
                                touched.lastname && errors.lastname
                                  ? 'has-error'
                                  : null
                              }`}
                            />
                            <Form.Text className="text-muted">
                              <Error
                                touched={touched.lastname}
                                message={errors.lastname}
                              />
                            </Form.Text>
                          </Form.Group>
                        </Col>
                      </Form.Row>

                      <Form.Row>
                        <Col xs="12" md="6">
                          <Form.Group>
                            <Form.Label>
                                Courriel
                            </Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Courriel"
                              name="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              className={`${
                                touched.email && errors.email
                                  ? 'has-error'
                                  : null
                              }`}
                            />
                            <Form.Text className="text-muted">
                              <Error
                                touched={touched.email}
                                message={errors.email}
                              />
                            </Form.Text>
                          </Form.Group>
                        </Col>
                        <Col xs="12" md="6">
                          <Form.Group>
                            <Form.Label>
                                Téléphone
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Téléphone"
                              name="telephone"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.telephone}
                              className={`${
                                touched.telephone && errors.telephone
                                  ? 'has-error'
                                  : null
                              }`}
                            />
                            <Form.Text className="text-muted">
                              <Error
                                touched={touched.telephone}
                                message={errors.telephone}
                              />
                            </Form.Text>
                          </Form.Group>
                        </Col>
                      </Form.Row>

                      <Form.Group>
                        <Form.Label>
                            Sujet
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Sujet"
                          name="subject"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.subject}
                          className={`${
                            touched.subject && errors.subject
                              ? 'has-error'
                              : null
                          }`}
                        />
                        <Form.Text className="text-muted">
                          <Error
                            touched={touched.subject}
                            message={errors.subject}
                          />
                        </Form.Text>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>
                            Message
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder="Message"
                          name="message"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.message}
                          className={`${
                            touched.message && errors.message
                              ? 'has-error'
                              : null
                          }`}
                        />
                        <Form.Text className="text-muted">
                          <Error
                            touched={touched.message}
                            message={errors.message}
                          />
                        </Form.Text>
                      </Form.Group>

                      <div id="message-submit" ref={submitMessage}><span>Courriel envoyé avec succès!</span></div>
                      <div id="message-submit-error" ref={submitMessageError}><span>Désolé, il y a eu une erreur. S&apos;il vous plaît essayer de nouveau dans quelques minutes...</span></div>
                    </Modal.Body>
                    <Modal.Footer>
                      <input type="button" variant="secondary" onClick={handleClose} value="Fermer" className="btn" />
                      <button
                        type="submit"
                        name="submit"
                        value="submit"
                        disabled={isSubmitting}
                        id="submit"
                        className="btn btnSubmit"
                      >
                    Envoyer
                      </button>
                    </Modal.Footer>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}


export default ContactModal;
