import { createContext, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const ApiContext = createContext({
    searchObject: {queryText: "", mealTypeText: "", diet: "", cuisinesList: [], excludedList: []},
    favourites: [],
    totalFavourites: 0,
    updateSearchObj: (obj) => {},
    addFav: (favouriteMeal) => {},
    removeFav: (mealId) => {},
    isFav: (mealId) => {}
});



export function ApiContextProvider(props)
{
    const [newSearchObject, setSearchObject] = useState({});

    const [userFavourites, setUserFavourites] = useState([]);

    function updateSearchObject(obj)
    {
        setSearchObject(obj);
    }

    function addFavourite(favouriteMeal)
    {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.concat(favouriteMeal);
        });
        
    }

    function removeFavourite(mealId)
    {
        setUserFavourites((prevUserFavourites) => {
            // the filter function loops through the array and excludes any element that returns true in
            // the call-back function
            return prevUserFavourites.filter(meal => mealId !== meal.id);
        });
    }

    function mealIsFavourite(mealId)
    {
        return userFavourites.some(meal => meal.id === mealId);
    }

    var context = {
        searchObject: {...newSearchObject},
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        updateSearchObj : updateSearchObject,
        addFav: addFavourite,
        removeFav: removeFavourite,
        isFav: mealIsFavourite
    };

    return(<ApiContext.Provider value={context}>
        {props.children}
    </ApiContext.Provider>);
}

export default ApiContext;