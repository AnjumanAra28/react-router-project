import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Users from './Users.jsx';
import UserDetail from './UserDetail.jsx';
import Posts from './Posts.jsx';
import PostDetails from './PostDetails.jsx';
import ErrorPage from './ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[{
      path:'/about',
      element:<About></About>
    },
    {
      path:'/contact',
      element:<Contact></Contact>
    },
    {
      path:'/users',
      loader :()=>fetch('https://jsonplaceholder.typicode.com/users'),
      element:<Users></Users>
    },
    {
      path:'/user/:userId',
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      element:<UserDetail></UserDetail>
    },
    {
      path:'/posts',
      loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
      element:<Posts></Posts>
    },
    {
      path:'/post/:postId',
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      element:<PostDetails></PostDetails>
    }
    ]
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
