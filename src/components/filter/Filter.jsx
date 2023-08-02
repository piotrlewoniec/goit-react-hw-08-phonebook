// import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/searchfilterslice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <>
      <p className={css.info}>Find contacts by name</p>
      <input
        className={css.inputfield}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </>
  );
};

// Filter.propTypes = {
//   inputValue: PropTypes.string,
//   action: PropTypes.func,
// };
