import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ViewRecipe from "./pages/ViewRecipe";
function App() {
  return (
    <>
      {/* define page routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/view/:id" element={<ViewRecipe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
