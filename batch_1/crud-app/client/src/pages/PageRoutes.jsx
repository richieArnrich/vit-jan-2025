import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "./Login";
import Register from "./Register";
import ViewRecipe from "./ViewRecipe";
function PageRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/viewrecipe/:id" element={<ViewRecipe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default PageRoutes;
