import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Mens from "./Pages/Mens"
import Womens from "./Pages/Womens"
import Kids from "./Pages/Kids"
import Login from "./Pages/Login"
import Cart from "./Pages/Cart"
import Footer from "./Components/Footer"
import SingleProduct from "./Components/SingleProduct"

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <> <Navbar/> <Home/> <Footer/> </>
    },
    {
      path: '/mens',
      element: <> <Navbar/> <Mens/> <Footer/> </>
    },
    {
      path: '/womens',
      element: <> <Navbar/> <Womens/> <Footer/> </>
    },
    {
      path: '/Kids',
      element: <> <Navbar/> <Kids/> <Footer/> </>
    },
    {
      path: '/login',
      element: <> <Navbar/> <Login/> <Footer/> </>
    },
    {
      path: 'cart',
      element: <> <Navbar/> <Cart/> <Footer/> </>
    },
    {
      path: '/product/:productId',
      element: <> <Navbar/> <SingleProduct/>  <Footer/> </>
    }
  ]) 

  return (
    <>
      <RouterProvider  router={router}/>
    </>
  )
}

export default App
