import CollapseContainer from "./CollapseContainer";
import RecipeSteps from "./RecipeSteps";

function RecipeInformation(props) {
    function decodeText(text)
    {
        return {__html: text};
        
        
        
    }

    

  return (
    <div>
      <div className="row">
        <div className="col-7">
          <h1>{props.recipeData.title}</h1>
        </div>
        <div className="col mt-4">
          <h5>Time: {props.recipeData.readyInMinutes} mins</h5>
        </div>
        <div className="col mt-4">
          <h5>Servings: {props.recipeData.servings}</h5>
        </div>
      </div>
      <div className="row mt-3">
          <div className="col offset-2">
              <img src={props.recipeData.image} alt={props.recipeData.title + "photo"}/>
          </div>
      </div>
      <div className="row mt-3">
          <div className="col">
              <p dangerouslySetInnerHTML={decodeText(props.recipeData.summary)}></p>
          </div>
      </div>
      <div className="row mt-3">
            <div className="col">
                <CollapseContainer collapseTitle="Ingredients" ingredientsList={props.recipeData.extendedIngredients} />
            </div>
      </div>
      <div className="row mt-3">
          <h4>Steps:</h4>
          <div className="col">
                {props.recipeData.analyzedInstructions.map((instruction) => {
                    return <RecipeSteps stepsList={instruction}/>
                })}
          </div>
      </div>
    </div>
  );
}

export default RecipeInformation;
