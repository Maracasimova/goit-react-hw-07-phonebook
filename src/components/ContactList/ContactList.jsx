import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { ContactUser } from 'components/ContactUser/ContactUser';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const contactSearch = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {contactSearch.map(({ id, name, number }) => (
        <ContactUser
          id={id}
          key={id}
          name={name}
          number={number}
          deleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};
