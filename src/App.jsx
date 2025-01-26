import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";

function App() {
 return (
  <div className="flex items-center justify-center">
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/article" element={<Article />} />
   </Routes>
  </div>
 );
}

export default App;
