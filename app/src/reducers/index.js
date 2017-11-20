export const actionTypes = {
  SUBMIT_FORM: 'SUBMIT_FORM',
};


export default (state, action) => {
  switch (action.type) {
    // cases
    default:
      return state;
  }
};

export const actions = {
  handleSubmitClick: (plant) => ({
    type: actionTypes.SUBMIT_FORM,
    plant,
  }),
};
