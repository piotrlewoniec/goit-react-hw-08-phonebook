// import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filter/searchfilterslice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div className={css.filter_wrapper}>
      <h2 className={css.filter_subtitle}>Contacts filter</h2>
      <p className={css.info}>Find contacts by name</p>
      <input
        className={css.inputfield}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </div>
  );
};

// Filter.propTypes = {
//   inputValue: PropTypes.string,
//   action: PropTypes.func,
// };
