import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Companies from "../pages/Companies/Companies";
import Regions from "../pages/Regions/Regions";
import Vacancy from "../pages/Vacancy/Vacancy";
import Vacancies from "../pages/Vacancies/Vacancies";
import Blog from "../pages/Blog/Blog";
import BlogPost from "../pages/BlogPost/BlogPost";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from "../pages/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/companies",
        element: <Companies />,
      },
      {
        path: "/regions",
        element: <Regions />,
      },
      {
        //path: "/vacancy/:vacancyId",
        path: "/vacancy",
        element: <Vacancy />,
      },
      {
        path: "/vacancies",
        element: <Vacancies />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        // path: "/blog-post/:blogPostId",
        path: "/blog-post",
        element: <BlogPost />,
      },
    ],
  },
]);

const AppRouter = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default AppRouter;
