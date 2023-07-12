import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Posts } from "./Components/Posts";
import { PostDetails} from "./Components/PostDetails";
import { Home} from "./Components/Home";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
