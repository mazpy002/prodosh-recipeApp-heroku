import {useEffect, useState} from "react";

import RecipeInformation from "./RecipeInformation";


function InfoModal(props)
{
    const [isLoading, setIsLoading] = useState(true);

    const [recipeInfo, setRecipeInfo] = useState({});

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
    
    return (<div className="infoModal">
        <div className="infoData">
        <RecipeInformation recipeData={recipeInfo}/>
        <button className="closeBtn btn btn-warning mt-3" onClick={props.onCancel}>Close</button>
        </div>
        
    </div>);
}

export default InfoModal;