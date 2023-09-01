export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter.value;

export const selectServerData = state => state.server;

export const selectServerContacts = state => state.server.data;

export const selectUser = state => state.user.user;

export const selectToken = state => state.user.token;

export const selectIsLoggedIn = state => state.user.isLoggedIn;

export const selectIsRefreshing = state => state.user.isRefreshing;
