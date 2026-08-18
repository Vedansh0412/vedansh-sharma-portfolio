import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import ScrollToTop from "./components/ScrolllToTop";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />
      <Routes>

        {/* Main portfolio */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Blog page */}
        <Route
          path="/blogs"
          element={<Blogs />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;