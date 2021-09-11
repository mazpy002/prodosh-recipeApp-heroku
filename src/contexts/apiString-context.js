import { createContext, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const ApiContext = createContext({
    searchObject: {queryText: "", mealTypeText: "", diet: "", cuisinesList: [], excludedList: []},
    updateSearchObj: (obj) => {}
});



export function ApiContextProvider(props)
{
    const [newSearchObject, setSearchObject] = useState({});

    function updateSearchObject(obj)
    {
        setSearchObject(obj);
    }

    var context = {
        searchObject: {...newSearchObject},
        updateSearchObj : updateSearchObject
    };

    return(<ApiContext.Provider value={context}>
        {props.children}
    </ApiContext.Provider>);
}

export default ApiContext;