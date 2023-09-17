import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Root from './components/Pages/Root.jsx'
import MovieDetail from './components/Pages/MovieDetail.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Root />
      },
      {
        path: "movie/:id",
        element: <MovieDetail />,
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
