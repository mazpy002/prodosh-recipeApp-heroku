import { useContext } from "react";
import { useHistory } from "react-router-dom";

import ApiContext from "../contexts/apiString-context";
import CardColumns from "../components/CardColumns.js";

function RecipeView(props) {
  const ApiCtx = useContext(ApiContext);

  // Get the query object from the context
  const queryObject = ApiCtx.searchObject;

  

  var queryString = "https://api.spoonacular.com/recipes/complexSearch?query=";

  // the user must enter query text
  if (queryObject.queryText !== "") {

    // Add query text to query
    queryString += queryObject.queryText;

    // If the user has selected diets add a diet param to the query
    if (queryObject.diet !== "" && queryObject.diet !== "All") {
      queryString += "&diet=" + queryObject.diet;

        
    }

    // If the user has selected a meal type add a type param to the query string
    if(queryObject.mealTypeText !== "" && queryObject.mealTypeText !== "All")
    {
        queryString += "&type=" + queryObject.mealTypeText;
    }
    
    
    if(queryObject.cuisinesList.length > 0)
    {
        queryString += "&cuisine=";

        // loop through cuisine types and add them to the string
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

            // Add items the user wants to exclude
            if(i !== queryObject.excludedList.length -1)
            {
                queryString += ",";
            }
        }
    }

    queryString += "&number=15&maxFat=10000&maxProtein=10000&maxCarbs=10000&apiKey=ba028c67a0b44c7ebf6f433633e40dd7";

    // Return card columns passing in the query string
    return (
      <div>
        <h1 className="PageTitle">Found recipes....</h1>
        <CardColumns apiCall={queryString}/>
      </div>
    );
  }

  return (
    <div>
      <h1 className="PageTitle">Invalid search parameters entered....</h1>
    </div>
  );
}

export default RecipeView;
