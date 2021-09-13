function CollapseContainer(props) {
  return (
    <div className="accordion" id="accordionFlushExample">
      <div className="accordion-item">
        <h1 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <h4>{props.collapseTitle}</h4>
          </button>
        </h1>

        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
          <ul>
          {props.ingredientsList.map((ingredient) => {
                return (<li key={ingredient.id}><h6>{ingredient.original}</h6></li>);
            })}
        </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CollapseContainer;
