import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Add from './pages/add.jsx';
import View from './pages/view.jsx';
import Update from './pages/update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addToDo",
    element: <Add />
  },
  {
    path: "/view",
    element: <View />
  },
  {
    path: "/update/:id",
    element: <Update />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
