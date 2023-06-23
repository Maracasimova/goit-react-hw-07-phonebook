import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/filterSlice';
import style from './Filter.module.css';
import { getFilter } from '../../redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <label>
      <p className={style.find}>Find contacts by name</p>
      <input
        className={style.input}
        name="filter"
        type="text"
        value={filter}
        placeholder="search..."
        onChange={handleChangeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};
