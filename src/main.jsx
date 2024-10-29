import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/Home/Home';
import About from './Components/Home/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Users from './Components/Users/Users';
import UserDetails from './Components/UserDetails/UserDetails';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
   
      {
        path: '/about',
        element: <About></About>
      },
      {
           path: '/contact',
           element: <Contact></Contact>

      },
      {
        path: "/users",
        loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: "/user/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`) ,
        element: <UserDetails></UserDetails>
      },
      {
        path: "/posts",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: "/post/:userId",
         loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
         element: <PostDetails></PostDetails>

      }
    ]
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
