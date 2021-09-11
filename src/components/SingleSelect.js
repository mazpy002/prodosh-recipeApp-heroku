import {FormSelect} from "react-bootstrap";


function SingleSelect(props)
{
    return<FormSelect id={props.id}>
        <option value="All">All</option>
        {props.mealTypes.map((mealType) => {
            return <option value={mealType}>
                {mealType}
            </option>
        })}
    </FormSelect>
}

export default SingleSelect;