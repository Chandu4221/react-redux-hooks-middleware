import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_PIXABAY_IMAGES } from "./redux/constants/pixabayConstants";

const App = () => {
  const dispatch = useDispatch();
  const pixabayStore = useSelector((state) => state.pixabayReducer);
  useEffect(() => {
    dispatch({ type: GET_PIXABAY_IMAGES.REQUEST });
  }, []);

  return (
    <div className="App">
      {pixabayStore.loading ? "Please Wait While We Load Images" : null}
      {pixabayStore.error ? pixabayStore.errorMessage : null}
      {pixabayStore.success
        ? pixabayStore.data.hits.map((img) => {
            return <img src={img.previewURL} key={img.id} alt={img.tags} />;
          })
        : null}
    </div>
  );
};

export default App;
