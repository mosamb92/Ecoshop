import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./page-erreur";
import About from './routes/about.jsx';
import Contact from './routes/contact.jsx';
import Produits from './routes/productliste.jsx';
import Cardp from './routes/cardproduct.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "productlist",
        children : [
          {
            path: '',
            element: <Produits /> 
          },
          {
            path: ':id',
            element: <Cardp />
          }
        ]
      }
     
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
