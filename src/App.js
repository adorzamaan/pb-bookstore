import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import BookDetails from "./components/BookDetails";
import Books from "./components/Books";
import Errorpage from "./components/ErrorPage";
import Home from "./components/Home";
import Root from "./Root/Root";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
          index: true,
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/books",
          loader: () => {
            return fetch("https://api.itbook.store/1.0/new");
          },
          element: <Books></Books>,
        },
        {
          path: "/book/:id",
          loader: ({ params }) => {
            return fetch(`https://api.itbook.store/1.0/books/${params.id}
            `);
          },
          element: <BookDetails></BookDetails>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
