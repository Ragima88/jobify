import { Link } from "react-router-dom";
import "./blog-aside.scss";

const BlogAside = () => {
  return (
    <aside>
      <form>
        <div className="search-form">
          <label for="search">Search</label>
          <input type="text" id="search" name="search" />
        </div>
        <button className="search-button">Search</button>
      </form>
      <div className="line"></div>
      <h2>Recent Posts</h2>
      <Link className={"post-link"} to={""}>
        The Best (and Worst) Canadian Merchant Account Providers
      </Link>
      <Link className={"post-link"} to={""}>
        Do you have a job that the average person doesn’t even know exists?
      </Link>
      <Link className={"post-link"} to={""}>
        DigitalOcean launches first Canadian data centre in Toronto
      </Link>
    </aside>
  );
};

export default BlogAside;
