import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx';
import Blog from './components/Blog.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Chef from './components/Chef.jsx';
import Foods from './components/Foods.jsx';
import FoodsLayout from './components/FoodsLayout.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/chef',
        element: <Chef></Chef>
      },

    ]
  },
  {
    path: 'foods',
    element: <FoodsLayout></FoodsLayout>,
    children: [
      {
        path: ':id',
        element: <Foods></Foods>,
        loader: ({ params }) => fetch(`https://food-paradise-server-gambit101.vercel.app/food/${params.id}`)
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
