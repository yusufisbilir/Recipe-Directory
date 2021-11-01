//hooks
import { useFetch } from "../../hooks/useFetch";

//components
import RecipeList from "../../components/RecipeList";

//stylesheets
import "./Home.sass";

function Create() {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

export default Create;
