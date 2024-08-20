import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Vacancy from "../pages/Vacancy/Vacancy";
import Vacancies from "../pages/Vacancies/Vacancies";
import Blog from "../pages/Blog/Blog";
import BlogPost from "../pages/BlogPost/BlogPost";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from "../pages/Root/Root";
import Listing from "../pages/Listing/Listing";
import Login from "./../pages/Login/Login";
import Pricing from "../pages/Pricing/Pricing";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/companies",
        element: <Listing variant={"companies"} />,
      },
      {
        path: "/regions",
        element: <Listing variant={"regions"} />,
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
      {
        path: "/post-a-job",
        element: <p>Post a job</p>,
      },
      {
        path: "/pricing",
        element: <Pricing />,
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
