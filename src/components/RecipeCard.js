
function RecipeCard(props)
{
    return(<div className="col">
        <div className="card">
            <img src={props.recipe.image} className="card-img-top" alt={props.recipe.title + "Image"}/>
            <div className="card-body">
        <h5 className="card-title">{props.recipe.title}</h5>
        <p className="card-text">
            {props.recipe.nutrition.nutrients.map((nutrient) => {
                return(<span>{nutrient.title}: <b>{nutrient.amount}{nutrient.unit}</b> <br /></span>);
            })}
        </p>
      </div>
        </div>

    </div>);
}

export default RecipeCard;