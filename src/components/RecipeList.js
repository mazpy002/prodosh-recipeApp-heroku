import { useState } from "react";

import InfoModal from "./InfoModal";
import Backdrop from "./Backdrop";

import RecipeCard from "./RecipeCard";

function RecipeList(props)
{
    const [recipeId, setRecipeId] = useState("");

    function openInfoOverlay(chosenRecipeId)
    {
            
        setRecipeId(chosenRecipeId);
    }

    function closeInfoOverlay()
    {
        setRecipeId("");
    }


    return(<div className="row row-cols-1 row-cols-md-4 g-4">
    {props.recipes.map((oneRecipe) =>{
        return <RecipeCard recipe={oneRecipe} key={oneRecipe.id} showMoreInfo={openInfoOverlay}/>
    })}
        <div>
        {(recipeId !== "") ? <InfoModal onCancel={closeInfoOverlay} recipeNum={recipeId}/> : null}
            {(recipeId !== "") ? <Backdrop onCancel={closeInfoOverlay}/> : null}
        </div>
    </div>);
}

export default RecipeList;