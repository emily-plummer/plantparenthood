export const actionTypes = {
  SUBMIT_FORM: 'SUBMIT_FORM',
  APP_INIT: 'APP_INIT',
  HANDLE_APP_INIT: 'HANDLE_APP_INIT',
};

const initialState = {
  plants: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_APP_INIT:
      return state;
    default:
      return state;
  }
};

export const actions = {
  handleSubmitClick: (plant) => ({
    type: actionTypes.SUBMIT_FORM,
    plant,
  }),
  handleAppInit: (response) => ({
    type: actionTypes.HANDLE_APP_INIT,
    response,
  })
};
