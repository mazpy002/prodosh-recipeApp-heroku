function CuisineCheck(props) {
    function selectCuisine()
    {
        props.addCuisine(props.cuisineName);
    }


  return (
    <div className="form-check" key={props.cuisineName + "div"}>
      <input
        key={props.cuisineName}
        className="form-check-input"
        type="checkbox"
        value={props.cuisineName}
        id={props.cuisineName}
        onClick={selectCuisine}
      />
      <label key={props.cuisineName + "label"} className="form-check-label" htmlFor={props.cuisineName}>
        {props.cuisineName}
      </label>
    </div>
  );
}

export default CuisineCheck;
