import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function ViewRecipe() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then((res) => {
        console.log(res.data);
        setRecipe(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>View Recipe</h1>
    </div>
  );
}

export default ViewRecipe;
