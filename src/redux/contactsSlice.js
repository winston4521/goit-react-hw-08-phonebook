import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './asynkSunks';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

// робимо 2 функції, щоб не дублювати код
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

// розбиваємо на 3 функції, щоб не дублювати код
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

// для кожного з цих екшенів буде створено actionCreator
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      // .addCase(fetchContacts.pending, handlePending)
      // .addCase(deleteContact.pending, handlePending)
      // .addCase(addContact.pending, handlePending)
      // .addCase(fetchContacts.rejected, handleRejected)
      // .addCase(deleteContact.rejected, handleRejected)
      // .addCase(addContact.rejected, handleRejected)
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
