
function RecipeCard(props) {

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

          <button type="button" className="btn btn-info ms-2" onClick={getMoreInfo}>
            More info...
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
