import CuisineCheck from "./CuisineCheck";

function CuisineBoxes(props) {
  return (
    <div>
        
      {props.cuisineTypes.map((cuisine) => {
        return (
          <CuisineCheck addCuisine={props.addMethod} cuisineName={cuisine} key={cuisine + 'key'}/>
        );
      })}
    </div>
  );
}

export default CuisineBoxes;
