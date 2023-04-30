import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainHome from './components/main/MainHome';
import Blog from './components/Blog/Blog';
import BlogDetails from './components/Blog/BlogDetails';
import Main from './Layout/Main';


function App() {
  const router = createBrowserRouter([
   {
    path: '/',  element: <Main></Main>  , children: [
      {
        path: '/', element:<MainHome></MainHome>
      },
      {
        path:'/blog', element:<Blog></Blog>
      },
      {
        path:'/blogdetails/:id', element:<BlogDetails></BlogDetails>
      }
    ]
   }
  ])
  return (
  <div> 
      <RouterProvider router={router}>
</RouterProvider>
  </div>

  );
}

export default App;
