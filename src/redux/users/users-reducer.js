import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import action from './users-action';

const usersReducer = createReducer([], {
  [action.fetchUsersSuccess]: (_, action) => action.payload,
});
const postsReducer = createReducer([], {
  [action.fetchPostsSuccess]: (_, action) => action.payload,
});

const albumsReducer = createReducer([], {
  [action.fetchAlbumsSuccess]: (_, action) => action.payload,
});

const saveIdReduser = createReducer(0, {
  [action.saveIdAction]: (_, action) => action.payload,
});

const modalReduser = createReducer(false, {
  [action.modalAction]: (_, action) => action.payload,
});

const loadingReducer = createReducer(false, {
  [action.fetchAlbumsRequest]: () => true,
  [action.fetchAlbumsSuccess]: () => false,
  [action.fetchPostsError]: () => false,
  [action.fetchPostsRequest]: () => true,
  [action.fetchPostsError]: () => false,
  [action.fetchPostsSuccess]: () => false,
  [action.fetchUsersRequest]: () => true,
  [action.fetchUsersError]: () => false,
  [action.fetchUsersSuccess]: () => false,
});

export default combineReducers({
  usersReducer,
  postsReducer,
  albumsReducer,
  saveIdReduser,
  modalReduser,
  loadingReducer,
});
