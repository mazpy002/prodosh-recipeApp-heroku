import {FormSelect} from "react-bootstrap";


function SingleSelect(props)
{
    return<select className="form-select" id={props.id} defaultValue="All" onChange={(event) => {
        const selectedItem = event.target.value;
        props.selectFunction(selectedItem);
    }}>
        <option value="All" key="All">All</option>
        {props.mealTypes.map((mealType) => {
            return <option value={mealType} key={mealType}>
            {mealType}
        </option>
        })}
    </select>
}

export default SingleSelect;