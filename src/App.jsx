import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//Pages 
import { Home } from "./pages/home/Home";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    }, 
    {
      path: "/login",
      element: <div>Home</div>
    },
    {
      path: "/dashboard",
      element: <div>Home</div>
    }
  ])

  return(
    <RouterProvider router={router} />
  )
}

export default App
