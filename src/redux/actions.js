// POSTS
export const POSTS_REQUESTED = 'POSTS_REQUESTED';
export const POSTS_RESOLVED = 'POSTS_RESOLVED';
export const POSTS_REJECTED = 'POSTS_REJECTED';

export const getPosts = () => ({ type: POSTS_REQUESTED, meta: 'posts' });

// ALBUMS
export const ALBUMS_REQUESTED = 'ALBUMS_REQUESTED';
export const ALBUMS_RESOLVED = 'ALBUMS_RESOLVED';
export const ALBUMS_REJECTED = 'ALBUMS_REJECTED';

export const getAlbums = () => ({ type: ALBUMS_REQUESTED, meta: 'albums' });

// USERS
export const USERS_REQUESTED = 'USERS_REQUESTED';
export const USERS_RESOLVED = 'USERS_RESOLVED';
export const USERS_REJECTED = 'USERS_REJECTED';

export const getUsers = () => ({ type: USERS_REQUESTED, meta: 'users' });
