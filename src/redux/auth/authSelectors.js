export const selectCurrentUser = state => state.auth.user;
console.log(selectCurrentUser)
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectAuthError = state => state.auth.error;
export const selectIsLoading = state => state.auth.loading;


// export const setName = state => state.auth.user.username;
// export const setAvatar = state => state.auth.user.avatar;
// export const setEmail = state => state.auth.user.email;
// export const setRole = state => state.auth.user.role;
// export const setPhone = state => state.auth.user.phone;
// export const setBirthday = state => state.auth.user.birthday;


export const isLoggedIn = state => state.auth.isLoggedIn;
export const isRefreshing = state => state.auth.isRefreshing;
export const getError = state => state.auth.error;