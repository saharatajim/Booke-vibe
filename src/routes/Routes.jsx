import { createBrowserRouter } from "react-router";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/Books/Books";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Bookdetails from "../pages/Books/Bookdetails";


 
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        index:true,element:<Homepage/>
      },
      {
        path:"/books",element:<Books/>
      }
      ,
      {
        path:"/bookDetails/:bookId",
        Component: Bookdetails,
        loader:()=>fetch("/booksData.json")
       
      }
    ],
    errorElement:<ErrorPage/>
  },
])
