import {useState, useEffect} from "react";

import RecipeCard from "./RecipeCard";
import RecipeList from "./RecipeList";

function CardColumns(props)
{
    // states for showing loading text or not
    const [isLoading, setIsLoading] = useState(true);

    // state to see if recipes have loaded from api
    const [loadedRecipes, setLoadedRecipes] = useState([]);

    // stops an infinite loops from happening, useEffect makes sure api calls is made only once
    useEffect(() => {
        setIsLoading(true);
        // fetch the data
        fetch(props.apiCall)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
 

            setIsLoading(false);
            setLoadedRecipes(data.results);
        });
    }, []);

    if(isLoading)
    {
        return <div><h1>Loading...</h1></div>;
    }

    // Return a recipe list containing all the recipes
    return(
    <RecipeList recipes={loadedRecipes}/>);
}

export default CardColumns;