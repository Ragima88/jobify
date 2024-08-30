import "./root.scss";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../routing/ScrollToTop";
import { useDispatch } from "react-redux";
import { fetchJobPosts } from "../../store/slices/jobPostsSlice";
import { fetchCompanies } from "../../store/slices/companiesSlice";
import { fetchCategories } from "../../store/slices/categoriesSlice";
import { fetchLocations } from "../../store/slices/locationsSlice";
import { useEffect } from "react";

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobPosts());
    dispatch(fetchCompanies());
    dispatch(fetchCategories());
    dispatch(fetchLocations());
  }, [dispatch]);

  return (
    <div className={"root-page"}>
      <ScrollToTop>
        <Header />
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </ScrollToTop>
    </div>
  );
};
export default Root;
