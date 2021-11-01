import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";

import "./Recipe.sass";

import React from "react";

function Create() {
  const { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`;
  const { data: recipe, isPending, error } = useFetch(url);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>{recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
          <p className="Method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}

export default Create;
