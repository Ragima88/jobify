import "./image.scss";
const Image = ({ className, src, alt }) => {
  return (
    <div className={`image ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
};
export default Image;
