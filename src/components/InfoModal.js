import {useEffect, useState} from "react";

import RecipeInformation from "./RecipeInformation";


function InfoModal(props)
{
    // State for loading
    const [isLoading, setIsLoading] = useState(true);

    // State for loading recipe information
    const [recipeInfo, setRecipeInfo] = useState({});

    // construct the api string
    var apiString = "https://api.spoonacular.com/recipes/" + props.recipeNum + "/information?apiKey=ba028c67a0b44c7ebf6f433633e40dd7";

    useEffect(() => {
        setIsLoading(true);

        fetch(apiString)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            //console.log(data);

            
            setRecipeInfo(data);
            setIsLoading(false);



        });


    }, []);

    if(isLoading)
    {
        return <div><h1>Loading...</h1></div>;
    }
    
    // Return the recipe information
    return (<div className="infoModal">
        <div className="infoData">
        <RecipeInformation recipeData={recipeInfo}/>
        <button className="closeBtn btn btn-warning mt-3" onClick={props.onCancel}>Close</button>
        </div>
        
    </div>);
}

export default InfoModal;