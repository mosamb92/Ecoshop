import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
      <div>
          <nav>
            <ul>
                <li><a className="active" href="/home">Accueil</a></li>
                <li><Link to={`/productlist`}>Liste des produits</Link></li>
                <li><Link to={`/contact`}>Nous contacter</Link></li>
                <li><Link to={`/about`}>A propos</Link></li>
              </ul>
          </nav>
          <div>
            <Outlet />
          </div>
        </div>

      
        
      
     
    );
  }