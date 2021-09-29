// THIS IS FOR THE ROOT REDUCER

import { GET_PIXABAY_IMAGES } from "../constants/pixabayConstants";

const initialState = {
  data: {},
  loading: false,
  success: false,
  error: false,
  errorMessage: null,
};

const pixabayReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PIXABAY_IMAGES.LOADING:
      return {
        ...state,
        data: { ...state.data },
        loading: true,
        success: false,
        error: false,
      };
    case GET_PIXABAY_IMAGES.SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        success: true,
        error: false,
      };
    case GET_PIXABAY_IMAGES.ERROR:
      return {
        ...state,
        data: { ...state.data },
        loading: false,
        success: false,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default pixabayReducer;
