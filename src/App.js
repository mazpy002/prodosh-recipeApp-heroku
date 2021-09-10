import { Route, Switch } from "react-router-dom";

import SearchPage from "./views/SearchPage";
import RecipeView from "./views/RecipeView";
import MoreInfo from "./views/MoreInfo";
import SavedRecipes from "./views/SavedRecipes";

function App() {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <SavedRecipes></SavedRecipes>
      </Route>

      <Route path="/search-page" exact={true}>
        <SearchPage></SearchPage>
      </Route>

      <Route path="/more-info" exact={true}>
        <MoreInfo></MoreInfo>
      </Route>

      <Route path="/recipe-view" exact={true}>
        <RecipeView></RecipeView>
      </Route>
    </Switch>
  );
}

export default App;
