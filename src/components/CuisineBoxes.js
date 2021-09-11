function CuisineBoxes(props) {
  return (
    <div>
      {props.cuisineTypes.map((cuisine) => {
        return (
          <div className="form-check" key={cuisine}>
            <input
              key={cuisine}
              className="form-check-input"
              type="checkbox"
              value={cuisine}
              id={cuisine}
            />
            <label key={cuisine} className="form-check-label" for={cuisine}>
              {cuisine}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default CuisineBoxes;
