import AxiosInstance from "../../api/AxiosInstance";
import { GET_PIXABAY_IMAGES } from "../constants/pixabayConstants";

// CONSTANTS ARE PLAIN OBJECTS.
const pixabayMiddleware = (store) => (next) => async (action) => {
  const { dispatch } = store;
  next(action);
  switch (action.type) {
    case GET_PIXABAY_IMAGES.REQUEST:
      dispatch({ type: GET_PIXABAY_IMAGES.LOADING });
      try {
        const res = await AxiosInstance.get("/");
        dispatch({ type: GET_PIXABAY_IMAGES.SUCCESS, payload: res.data });
      } catch (error) {
        dispatch({ type: GET_PIXABAY_IMAGES.ERROR, payload: error.message });
      }
      break;
    default:
      break;
  }
};

export default pixabayMiddleware;
