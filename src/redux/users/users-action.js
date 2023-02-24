import { createAction } from '@reduxjs/toolkit';

const fetchUsersRequest = createAction('users/fetchUsersRequest');
const fetchUsersSuccess = createAction('users/fetchUsersSuccess');
const fetchUsersError = createAction('users/fetchUsersError');
const fetchPostsRequest = createAction('users/fetchPostsRequest');
const fetchPostsSuccess = createAction('users/fetchPostsSuccess');
const fetchPostsError = createAction('users/fetchPostsError');
const fetchAlbumsRequest = createAction('users/fetchAlbumsRequest');
const fetchAlbumsSuccess = createAction('users/fetchAlbumsSuccess');
const fetchAlbumsError = createAction('users/fetchAlbumsError');

const saveIdAction = createAction('users/saveIdAction');

const modalAction = createAction('users/modalAction');

export default {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError,
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
  fetchAlbumsRequest,
  fetchAlbumsSuccess,
  fetchAlbumsError,
  saveIdAction,
  modalAction,
};
