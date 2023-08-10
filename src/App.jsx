import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Movie from "./pages/Movie";
import EditMovie from "./pages/EditMovie";
import AddMovie from "./pages/AddMovie";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies/:slug" element={<Movie />} />
        <Route path="addMovie" element={<AddMovie />} />
        <Route path="editmovie/:slug" element={<EditMovie />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
