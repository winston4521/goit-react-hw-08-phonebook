import { useState } from 'react';
import shortid from 'shortid';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/Contacts/contactsoperations';
import { selectContacts } from '../../redux/Contacts/Selectors';
import { toast } from 'react-toastify';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
} from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { SupervisedUserCircle } from '@mui/icons-material';

export const FormAdd = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmitBtn = e => {
    e.preventDefault();

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (contacts.find(({ name }) => name === newContact.name)) {
      reset();
      return toast.error(`${newContact.name} is already in contacts list`);
    }
    dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box>
      <form onSubmit={onSubmitBtn}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            variant="outlined"
            size="small"
            required
            name="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DriveFileRenameOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            size="small"
            variant="outlined"
            label="Number"
            name="number"
            required
            value={number}
            onChange={({ target }) => setNumber(target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneIcon />
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="success"
            endIcon={<AddCircleIcon />}
          >
            Add contact
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
