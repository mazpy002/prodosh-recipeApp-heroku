function CollapseContainer(props) {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            {props.collapseTitle}
          </button>
        </h2>

        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
          <ul>
          {props.ingredientsList.map((ingredient) => {
                return (<li>{ingredient.original}</li>);
            })}
        </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CollapseContainer;
