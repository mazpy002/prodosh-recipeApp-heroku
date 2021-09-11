import classes from "./SearchForm.module.css";
import SingleSelect from "./SingleSelect";
import CuisineBoxes from "./CuisineBoxes";

import { FormGroup } from "react-bootstrap";
import { Form, FormLabel, FormControl } from "react-bootstrap";

function SearchForm() {
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

  const cuisineSet1 = ["Greek", "Mexican", "British", "Indian"];

  const cuisineSet2 = ["Italian", "Chinese", "Japanese", "Spanish"];

  const cuisineSet3 = ["Thai", "Korean", "Vietnamese", "French"];

  return (
    <form>
      <div className="row">
        <div className="col-3">
          <label for="queryText">Enter what you would like to eat: </label>
          <input
            className="form-control"
            id="queryText"
            type="text"
            required
            placeholder="beef, chicken, pizza..."
          />
        </div>
        <div className="col-2">
          <label>Select Meal type:</label>
          <SingleSelect id="mealTypeSelector" mealTypes={meals} />
        </div>
      </div>
      <div className="row">
        <h5>Select cuisine types: </h5>
        <div className="col-1">
          <CuisineBoxes cuisineTypes={cuisineSet1} />
        </div>
        <div className="col-1">
          <CuisineBoxes cuisineTypes={cuisineSet2} />
        </div>
        <div className="col-1">
          <CuisineBoxes cuisineTypes={cuisineSet3} />
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
