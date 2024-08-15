import "./blog-author.scss";
import author from "../../assets/images/author.jpeg";
import Image from "./../Image/Image";
const BlogAuthor = () => {
  return (
    <div className="blog-post-author">
      <Image className={"blog-post-author-img"} src={author} />
      <div className="blog-post-author-desc">
        Written by <a href={""}>admin</a>
      </div>
      <div className="blog-post-author-text">March 29, 2016</div>
      <div className="blog-post-author-text">0 Comments</div>
    </div>
  );
};

export default BlogAuthor;
