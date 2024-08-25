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
import PostJob from "../pages/PostJob/PostJob";
import SignUp from "../pages/SignUp/SignUp";
import AddCompany from "../pages/AddCompany/AddCompany";
import ProtectedRoute from "./ProtectedRoute";

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
        path: "/locations",
        element: <Listing variant={"locations"} />,
      },
      {
        path: "/categories",
        element: <Listing variant={"categories"} />,
      },
      {
        path: "/vacancy/:vacancyId",
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
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/submit-company",
        element: (
          <ProtectedRoute>
            <AddCompany />
          </ProtectedRoute>
        ),
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
