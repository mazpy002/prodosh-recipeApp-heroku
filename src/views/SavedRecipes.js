import {useContext} from "react";
import ApiContext from "../contexts/apiString-context";

import RecipeList from "../components/RecipeList";


function SavedRecipes()
{
    const ApiCtx = useContext(ApiContext);

    let htmlContent;

    if(ApiCtx.totalFavourites === 0)
    {
        htmlContent = <h1 className="PageTitle">You have no favourites, click search recipe in the navbar to find meals</h1>;
    }
    else
    {
        htmlContent = <RecipeList recipes={ApiCtx.favourites}/>;
    }


    return <div>
        <h1 className="PageTitle">Here are your saved recipes</h1>
        {htmlContent}
    </div>
}

export default SavedRecipes;