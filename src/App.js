import { Route, Switch} from "react-router-dom";

import SearchPage from "./views/SearchPage";
import RecipeView from "./views/RecipeView";
import SavedRecipes from "./views/SavedRecipes";

import MainNavigation from "./components/MainNavigation";

function App() {

  return (
    <div>
      <MainNavigation/>
    <Switch>
      
      <Route path="/" exact={true}>
        <SearchPage></SearchPage>
      </Route>

      <Route path="/search-recipe" exact={true}>
        <SearchPage></SearchPage>
      </Route>

      <Route path="/favourites" exact={true}>
        <SavedRecipes></SavedRecipes>
      </Route>

      <Route path="/recipe-view" exact={true}>
        <RecipeView></RecipeView>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
