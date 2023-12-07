import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Container, StyledField, StyledForm } from './ContactForm.Styled';


const validation = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .matches(
        /^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('This is a required field'),
    number: Yup.string()
      .matches(
        /^\+?\d{1,4}?[ .\-s]?(\(\d{1,3}?\))?([ .\-s]?\d{1,4}){1,4}$/,
        "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      )
      .required('This is a required field')
      .min(9, "Please enter at least 9 characters"),
  });

const ContactForm = ({onAdd}) => (
  <Container>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={validation}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label>
          
          <StyledField name="name" placeholder="Name" />
          <ErrorMessage name="name"/>
        </label>

        <label>
          
          <StyledField name="number" placeholder="Number" />
          <ErrorMessage name="number"/>
        </label>

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  </Container>
);

export default ContactForm;
