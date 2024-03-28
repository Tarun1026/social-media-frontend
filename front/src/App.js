import './App.css';
import Login from './components/Login';
import Signup from './components/sign';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {
  const router=createBrowserRouter([{
    path:"/",
    element:(
      <>
      <Login/>
    </>)
  },
  {
    path:"/Signup",
    element:(
      <>
      <Signup/>
    </>)
  }])
  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  );
}

export default App;
