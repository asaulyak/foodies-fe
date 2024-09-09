export const selectUser = state => {
  console.log(state.user);

  return state.user.info;
};
export const selectIsLoading = state => state.user.isLoading;
export const selectError = state => state.user.error;
