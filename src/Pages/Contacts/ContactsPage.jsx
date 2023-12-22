import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { FormAdd } from 'components/Form/FormAdd';
import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/Contacts/contactsoperations';
import { Stack, Typography } from '@mui/material';
import { Box, Center } from '@chakra-ui/react';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Stack useFlexGap alignItems="center" justifyContent="center">
      <Stack
        useFlexGap
        alignItems="center"
        justifyContent="center"
        spacing={3}
        sx={{
          backgroundColor: '#c2c7ca',
          minWidth: '320px',
          padding: '24px',
          borderRadius: '10%',
          opacity: 0.8,
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Phonebook
        </Typography>
        <FormAdd />
        <Typography variant="h4" component="h2" gutterBottom>
          Contacts
        </Typography>
        <Filter />
        <Contacts />
      </Stack>
    </Stack>
  );
};

export default ContactsPage;
