import { Formik } from 'formik';
import { nanoid } from 'nanoid';

import {
  FormWrap,
  SubTitle,
  Label,
  Input,
  FormBtn,
} from './AddContactForm.styled';

const AddContactForm = ({ setNewContact }) => {
  const inputNameId = nanoid(6);
  const inputNumberId = nanoid(6);

  const initialValues = {
    name: '',
    number: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setNewContact(values);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormWrap>
        <SubTitle>Add</SubTitle>
        <Label htmlFor={inputNameId}>Name</Label>
        <Input
          id={inputNameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor={inputNumberId}>Number</Label>
        <Input
          id={inputNumberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <FormBtn type="submit">Add contact</FormBtn>
      </FormWrap>
    </Formik>
  );
};

export default AddContactForm;
