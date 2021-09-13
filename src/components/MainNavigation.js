import { useContext } from "react";
import ApiContext from "../contexts/apiString-context";

import { Link } from "react-router-dom";


function MainNavigation() {
  const ApiCtx = useContext(ApiContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Recipe Finder
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link to="/favourites">My Favourites</Link>
              <span className="badge bg-danger ms-1">{ApiCtx.totalFavourites}</span>
            </li>

            <li className="nav-item ms-5">
              <Link to="/search-recipe">Search recipes</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavigation;
