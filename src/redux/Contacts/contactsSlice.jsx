import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsoperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleRejected = (state, { payload }) => {
  return {
    ...state,
    isLoading: false,
    error: payload,
  };
};

const handleFetchContactsSuccess = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: null,
  items: payload,
});

const handleAddContactSuccess = (state, action) => ({
  ...state,
  isLoading: false,
  error: null,
  items: [action.payload, ...state.items],
});

const handleDeleteContactSuccess = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: null,
  items: state.items.filter(item => item.id !== payload.id),
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(fetchContacts.fulfilled, handleFetchContactsSuccess)
      .addCase(deleteContact.fulfilled, handleDeleteContactSuccess)
      .addCase(addContact.fulfilled, handleAddContactSuccess)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContact.pending,
          addContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected
        ),
        handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
