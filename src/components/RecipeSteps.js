
function RecipeSteps(props)
{
    return(
        <div>
            <h5>{props.stepsList.name}</h5>
    <ul>
        {props.stepsList.steps.map((stepObj) => {
            return <li><p><b>{stepObj.number}. </b>{stepObj.step}</p> </li>
        })}
    </ul>
    </div>
    );
}

export default RecipeSteps;