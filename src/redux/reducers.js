import { combineReducers } from 'redux';

import {
  POSTS_REQUESTED,
  POSTS_REJECTED,
  POSTS_RESOLVED,
  ALBUMS_REQUESTED,
  ALBUMS_REJECTED,
  ALBUMS_RESOLVED,
  USERS_REQUESTED,
  USERS_REJECTED,
  USERS_RESOLVED,
  LOGIN,
  LOGOUT,
} from './actions';

const posts = (state = null, action) => {
  switch (action.type) {
    case POSTS_RESOLVED:
      return action.payload;
    default:
      return state;
  }
};

const albums = (state = null, action) => {
  switch (action.type) {
    case ALBUMS_RESOLVED:
      return action.payload;
    default:
      return state;
  }
};

const users = (state = null, action) => {
  switch (action.type) {
    case USERS_RESOLVED:
      return action.payload;
    default:
      return state;
  }
};

const login = (state = false, action) => {
  switch (action.type) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
};

const loading = (
  state = { posts: false, albums: false, users: false },
  action
) => {
  switch (action.type) {
    case POSTS_REQUESTED:
    case ALBUMS_REQUESTED:
    case USERS_REQUESTED:
      return {
        ...state,
        [action.meta]: true,
      };
    case POSTS_REJECTED:
    case POSTS_RESOLVED:
    case ALBUMS_REJECTED:
    case ALBUMS_RESOLVED:
    case USERS_REJECTED:
    case USERS_RESOLVED:
      return {
        ...state,
        [action.meta]: false,
      };
    default:
      return state;
  }
};

const errors = (
  state = { posts: false, albums: false, users: false },
  action
) => {
  switch (action.type) {
    case POSTS_REQUESTED:
    case POSTS_RESOLVED:
    case ALBUMS_REQUESTED:
    case ALBUMS_RESOLVED:
    case USERS_REQUESTED:
    case USERS_RESOLVED:
      return {
        ...state,
        [action.meta]: false,
      };
    case POSTS_REJECTED:
    case ALBUMS_REJECTED:
    case USERS_REJECTED:
      return {
        ...state,
        [action.meta]: true,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  posts,
  albums,
  users,
  loading,
  errors,
  login,
});

export default reducer;
