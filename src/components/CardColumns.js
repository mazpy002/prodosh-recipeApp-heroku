import {useState, useEffect} from "react";

import RecipeCard from "./RecipeCard";

function CardColumns(props)
{
    const [isLoading, setIsLoading] = useState(true);

    const [loadedRecipes, setLoadedRecipes] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(props.apiCall)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
 

            setIsLoading(false);
            setLoadedRecipes(data.results);
        })
    }, []);

    if(isLoading)
    {
        return <div><h1>Loading...</h1></div>;
    }


    return(
    <div className="row row-cols-1 row-cols-md-4 g-4">
        {loadedRecipes.map((oneRecipe) =>{
            return <RecipeCard recipe={oneRecipe} key={oneRecipe.id}/>
        })}
        </div>);
}

export default CardColumns;