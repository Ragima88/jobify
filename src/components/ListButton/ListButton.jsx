import "./list-button.scss";

const ListButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="list-button">
      Load More Listings
    </button>
  );
};
export default ListButton;
