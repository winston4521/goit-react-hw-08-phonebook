import { useDispatch, useSelector } from 'react-redux';
import { fillFilter } from '../../redux/Filter/filterSlice';
import { selectFilter } from '../../redux/Contacts/Selectors';
import { TextField } from '@mui/material';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <TextField
        label="Search"
        name="search"
        size="small"
        value={filter}
        onChange={({ target }) => dispatch(fillFilter(target.value))}
      />
    </>
  );
};
