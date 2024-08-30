import "./image.scss";
const Image = ({ className, src, alt, onClick }) => {
  return (
    <div onClick={onClick} className={`image ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
};
export default Image;
