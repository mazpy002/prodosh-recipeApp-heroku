import {useContext} from "react";

import ApiContext from "../contexts/apiString-context";

function RecipeCard(props) {
  // Use the context that holds all the favourite meals in a list
  const ApiCtx = useContext(ApiContext);

  // Check if the card is already a favourite
  const isFavourite = ApiCtx.isFav(props.recipe.id);
  
  function changeStatus()
  {
    // If the car is favourite this function shoud remove favourites
    if(isFavourite)
    {
      ApiCtx.removeFav(props.recipe.id);
    }
    // else add card to favourite
    else{
      ApiCtx.addFav({
        id: props.recipe.id,
        title: props.recipe.title,
        nutrition: props.recipe.nutrition,
        image: props.recipe.image
      });
    }
  }

    function getMoreInfo()
    {
        props.showMoreInfo(props.recipe.id);
    }

  return (
    <div className="col" key={props.recipe.id}>
      <div className="card">
        <img
          src={props.recipe.image}
          className="card-img-top"
          alt={props.recipe.title + "Image"}
        />
        <div className="card-body">
          <h5 className="card-title">{props.recipe.title}</h5>
          <p className="card-text">
            {props.recipe.nutrition.nutrients.map((nutrient) => {
              return (
                <span key={props.recipe.id + nutrient.title + "nutrients"}>
                  {nutrient.title}:{" "}
                  <b>
                    {nutrient.amount}
                    {nutrient.unit}
                  </b>{" "}
                  <br />
                </span>
              );
            })}
          </p>
          <button type="button" className={isFavourite ? "btn btn-danger" : "btn btn-success"} onClick={changeStatus}>{isFavourite ? "Un-Favourite" : "To Favourite"}</button>
          <button type="button" className="btn btn-info ms-2" onClick={getMoreInfo}>
            More info...
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
