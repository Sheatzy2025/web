import ReactDOM from "react-dom/client";
import React from "react";
import './index.css'
import App, { MoviePage } from './components/App/App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage, CinemaPage, MovieListPage } from "./components/App/App.tsx";
import AddMoviePage from "./components/pages/AddMoviePage.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "",
        element:<HomePage/>
      },
      {
        path:"cinema",
        element: <CinemaPage/>
      },
      {
        path:"movielist",
        element:<MovieListPage />
      },
      {
        path: "movies/:movieTitle",
        element:<MoviePage />
      },
      {
        path:"addMovie",
        element:<AddMoviePage/>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
