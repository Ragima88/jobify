import "./logout-button.scss";

const LogoutButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="logout-button">
      Logout
    </button>
  );
};
export default LogoutButton;
