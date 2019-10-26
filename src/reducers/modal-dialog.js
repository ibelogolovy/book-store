import actionTypes from '../constants/actionTypes';

const updateModalDialog = (state, action) => {

  if (state === undefined){
    return {
      show: false,
      params: {},
      loading: true,
      error: null
    };
  };

  switch (action.type) {
    case actionTypes.MODAL_OPENED:
      return {
        show: true,
        params: action.payload,
        loading: true,
        error: null
      };

    case actionTypes.MODAL_CLOSED:
      return {
        show: false,
        params: action.payload,
        loading: true,
        error: null
      };

    default:
      return state.modalDialog;

};
};

export default updateModalDialog;
