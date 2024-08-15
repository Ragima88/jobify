import "./comment-form.scss";
import GreenButton from "./../GreenButton/GreenButton";
const CommentForm = ({ style }) => {
  return (
    <div style={style} className="comment-form">
      <h2 className="comment-form-title">Leave a Reply</h2>
      <form>
        <div className="form-group">
          <label for="comment">Comment *</label>
          <textarea type="text" id="comment" name="comment" rows="8" />
        </div>
        <div className="form-group">
          <label for="name">Name *</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label for="email">Email *</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label for="site">Website</label>
          <input type="text" id="site" name="site" />
        </div>
        <div className="form-group checkbox-group">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <GreenButton text={"Post Comment"} />
      </form>
    </div>
  );
};
export default CommentForm;
