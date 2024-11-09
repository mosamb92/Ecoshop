import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li><a className="active" href="/home">Accueil</a></li>
              <li><Link to={`/productlist`}>Liste des produits</Link></li>
              <li><Link to={`/contact`}>Nous contacter</Link></li>
              <li><Link to={`/about`}>A propos</Link></li>
            </ul>
          </nav>
        </header>
        <div className="container">
            <Outlet />
        </div>
      </>

      
        
      
     
    );
  }