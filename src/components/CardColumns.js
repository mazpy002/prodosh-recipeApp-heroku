import {useState, useEffect} from "react";

import RecipeCard from "./RecipeCard";
import RecipeList from "./RecipeList";

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
    <RecipeList recipes={loadedRecipes}/>);
}

export default CardColumns;