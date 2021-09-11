import { useRef } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import SingleSelect from "./SingleSelect";
import CuisineBoxes from "./CuisineBoxes";

import classes from "./SearchForm.module.css";
import ApiContext from "../contexts/apiString-context";

function SearchForm(props) {
  const queryInputRef = useRef();
  const history = useHistory();

  const ApiCtx = useContext(ApiContext);

  const meals = [
    "main course",
    "side dish",
    "dessert",
    "salad",
    "bread",
    "breakfast",
    "soup",
    "snack",
    "drink",
  ];

  const diets = [
    "Gluten Free",
    "Ketogenic",
    "Vegetarian",
    "Vegan",
    "Pescetarian",
    "Paleo",
    "Primal",
  ];

  const cuisineSet1 = ["Greek", "Mexican", "British", "Indian"];
  const cuisineSet2 = ["Italian", "Chinese", "Japanese", "Spanish"];
  const cuisineSet3 = ["Thai", "Korean", "Vietnamese", "French"];

  const excludeSet1 = ["Dairy", "Egg", "Gluten", "Grain"];
  const excludeSet2 = ["Peanut", "Seafood", "Sesame", "Shellfish"];
  const excludeSet3 = ["Soy", "Sulfite", "Tree Nut", "Wheat"];

  var selectedCuisines = [];
  var excludedItems = [];

  var chosenMealType = "";
  var chosenDietType = "";

  function setMealType(mealType)
  {
      chosenMealType = mealType;
  }

  function setDietType(dietType)
  {
      chosenDietType = dietType;
  }

  function excludeItem(itemName) {
    if (!excludedItems.includes(itemName)) excludedItems.push(itemName);
    else {
      excludedItems = excludedItems.filter(function (obj, index, arr) {
        return obj !== itemName;
      });
    }

    //console.log(excludedItems);
  }

  function searchRecipe(event) {
    event.preventDefault();

    const enteredQueryText = queryInputRef.current.value;

    var searchObject = {
      queryText: enteredQueryText,
      mealTypeText: chosenMealType,
      diet: chosenDietType,
      cuisinesList: selectedCuisines,
      excludedList: excludedItems
    };

    ApiCtx.updateSearchObj(searchObject);

    history.replace("/recipe-view");

    //props.SetSearchObject("searchObject");
    
  }

  function addCuisines(newCuisine) {
    if (!selectedCuisines.includes(newCuisine))
      selectedCuisines.push(newCuisine);
    else {
      selectedCuisines = selectedCuisines.filter(function (obj, index, arr) {
        return obj !== newCuisine;
      });
    }

    //console.log(selectedCuisines);
  }

  return (
    <form>
      <div className="row mt-2">
        <div className="col-3">
          <label htmlFor="queryText">Enter what you would like to eat: </label>
          <input
            className="form-control"
            id="queryText"
            type="text"
            required
            placeholder="beef, chicken, pizza..."
            ref={queryInputRef}
          />
        </div>
        <div className="col-2">
          <label>Select Meal type:</label>
          <SingleSelect
            id="mealTypeSelector"
            mealTypes={meals}
            selectFunction={setMealType}
          />
        </div>
        <div className="col-2">
          <label>Select Diet type:</label>
          <SingleSelect
            id="dietTypeSelector"
            mealTypes={diets}
            selectFunction={setDietType}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="row">
          <div className="col-3">
            <h5>Select cuisine types: </h5>
          </div>
          <div className="col-3 offset-1">
            <h5>Exclude recipes that contain...</h5>
          </div>
        </div>
        <div className="col-1">
          <CuisineBoxes addMethod={addCuisines} cuisineTypes={cuisineSet1} />
        </div>
        <div className="col-1">
          <CuisineBoxes addMethod={addCuisines} cuisineTypes={cuisineSet2} />
        </div>
        <div className="col-1">
          <CuisineBoxes addMethod={addCuisines} cuisineTypes={cuisineSet3} />
        </div>

        <div className="col-1 offset-1">
        <CuisineBoxes addMethod={excludeItem} cuisineTypes={excludeSet1} />
        </div>

        <div className="col-1">
        <CuisineBoxes addMethod={excludeItem} cuisineTypes={excludeSet2} />
        </div>

        <div className="col-1">
        <CuisineBoxes addMethod={excludeItem} cuisineTypes={excludeSet3} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button
            type="submit"
            className="btn btn-primary col-7"
            onClick={searchRecipe}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
