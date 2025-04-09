import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://dummyjson.com/recipes").then((res) => {
      console.log(res.data);
      setRecipes(res.data.recipes);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          {recipes.map((recipe, index) => {
            return (
              <div key={index} className="col-md-4 p-2">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    class="card-img-top"
                    src={recipe.image}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{recipe.name}</h5>
                    <p class="card-text">
                      Ratings: {recipe.rating} | Reviews: {recipe.reviewCount} |
                    </p>
                    <p class="card-text">
                      Meal Type:{" "}
                      {recipe.mealType.map((meal) => {
                        return <span>{meal} | </span>;
                      })}
                    </p>
                    <Link
                      to={`/viewrecipe/${recipe.id}`}
                      class="btn btn-primary"
                    >
                      View Recipe
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
