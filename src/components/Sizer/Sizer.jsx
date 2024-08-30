import "./sizer.scss";

const Sizer = ({ width, className, children }) => {
  return (
    <div className={`sizer ${className}`} style={{ width: width }}>
      {children}
    </div>
  );
};
export default Sizer;
