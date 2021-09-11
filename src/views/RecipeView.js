import { useContext } from "react";
import { useHistory } from "react-router-dom";

import ApiContext from "../contexts/apiString-context";
import CardColumns from "../components/CardColumns.js";

function RecipeView(props) {
  const ApiCtx = useContext(ApiContext);

  const queryObject = ApiCtx.searchObject;

  //console.log(ApiCtx.searchObject);

  var queryString = "https://api.spoonacular.com/recipes/complexSearch?query=";

  if (queryObject.queryText !== "") {
    queryString += queryObject.queryText;

    if (queryObject.diet !== "" && queryObject.diet !== "All") {
      queryString += "&diet=" + queryObject.diet;

        
    }

    if(queryObject.mealTypeText !== "" && queryObject.mealTypeText !== "All")
    {
        queryString += "&type=" + queryObject.mealTypeText;
    }
    
    if(queryObject.cuisinesList.length > 0)
    {
        queryString += "&cuisine=";

        for(let i = 0; i < queryObject.cuisinesList.length; ++i)
        {
            queryString += queryObject.cuisinesList[i];

            if(i !== queryObject.cuisinesList.length -1)
            {
                queryString += ",";
            }
        }
    }

    if(queryObject.excludedList.length > 0)
    {
        queryString += "&excludedIngredients=";

        for(let i = 0; i < queryObject.excludedList.length; ++i)
        {
            queryString += queryObject.excludedList[i];

            if(i !== queryObject.excludedList.length -1)
            {
                queryString += ",";
            }
        }
    }

    queryString += "&number=15&maxFat=10000&maxProtein=10000&maxCarbs=10000&apiKey=ba028c67a0b44c7ebf6f433633e40dd7";

    
    return (
      <div>
        <h1>Found recipes....</h1>
        <CardColumns apiCall={queryString}/>
      </div>
    );
  }

  return (
    <div>
      <h1>Invalid search parameters entered....</h1>
    </div>
  );
}

export default RecipeView;
