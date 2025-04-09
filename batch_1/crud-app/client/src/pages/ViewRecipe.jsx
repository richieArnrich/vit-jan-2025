import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ViewRecipe() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes/" + id)
      .then((res) => {
        setRecipe(res.data);
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{recipe.name}</h1>
      <div className="d-flex justify-content-around">
        <div>
          <img
            src={recipe.image}
            alt={recipe.name}
            style={{ height: "25rem", padding: "0.5rem" }}
          />
        </div>
        <div className="p-2">
          <p>
            <b>Ingredients:</b>{" "}
            {recipe.ingredients.map((ingredient, index) => {
              return <span key={index}>{ingredient}, </span>;
            })}
          </p>
          <p>
            <b>Instructions:</b>{" "}
            <ol>
              {recipe.instructions.map((instruction, index) => {
                return <li key={index}>{instruction}</li>;
              })}
            </ol>
          </p>
          <p>
            <b>Cooking Time:</b> {recipe.cookTimeMinutes}
          </p>
          <p>
            <b>Servings:</b> {recipe.servings}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ViewRecipe;
