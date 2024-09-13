export const selectUser = state => {
  return state.user.info;
};

export const selectInfoUser = state => {
  return state.userInfo.info;
};
export const selectIsLoading = state => state.user.isLoading;
export const selectIsLoadingUserInfo = state => state.userInfo.isLoading;

export const selectError = state => state.user.error;
