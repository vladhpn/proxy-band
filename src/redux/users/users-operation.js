import axios from 'axios';
import actions from './users-action';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const fetchUsers = () => async (dispatch) => {
  dispatch(actions.fetchUsersRequest());
  try {
    await axios
      .get('/users')
      .then(({ data }) => dispatch(actions.fetchUsersSuccess(data)));
  } catch (error) {
    dispatch(actions.fetchUsersError(error.message));
  }
};

const fetchPosts = (id) => async (dispatch) => {
  dispatch(actions.fetchPostsRequest());
  try {
    await axios
      .get(`/posts?userId=${id}`)
      .then(({ data }) => dispatch(actions.fetchPostsSuccess(data)));
  } catch (error) {
    dispatch(actions.fetchPostsError(error.message));
  }
};

const fetchAlbums = (id) => async (dispatch) => {
  dispatch(actions.fetchAlbumsRequest());
  try {
    await axios
      .get(`/albums?userId=${id}`)
      .then(({ data }) => dispatch(actions.fetchAlbumsSuccess(data)));
  } catch (error) {
    dispatch(actions.fetchAlbumsError(error.message));
  }
};

export default { fetchUsers, fetchPosts, fetchAlbums };
