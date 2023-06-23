import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import style from './ContactUser.module.css';

export const ContactUser = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li key={id}>
      {name} : {number}
      <button className={style.btn} type="button" onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
};
