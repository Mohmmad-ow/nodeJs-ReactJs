import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
// ToDoList imports
import Add from './pages/todos/add.jsx';
import View from './pages/todos/view.jsx';
import Update from './pages/todos/update.jsx';
// UserAuth Imports 
import Register from './authentication/register.jsx';
import Login from './authentication/login.jsx';
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
  },
  {
    path: "/user/register",
    element: <Register />
  }
  ,
  {
    path: "/user/login",
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
