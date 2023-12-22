import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/Contacts/contactsoperations';
import { selectFilteredContacts } from '../../redux/Contacts/Selectors';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, List, ListItem, ListItemText } from '@mui/material';
export const Contacts = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: '-moz-initial',
        padding: '10px',
      }}
    >
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem
          key={id}
          disableGutters
          sx={{ justifyContent: 'space-between' }}
        >
          <Box
            sx={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <ListItemText primary={`Name: ${name} `} />
            <ListItemText primary={`Phone: ${number} `} />
          </Box>

          <IconButton color="error" onClick={() => dispatch(deleteContact(id))}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};
