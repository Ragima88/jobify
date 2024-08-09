import "./sizer.scss";

const Sizer = ({ width, children }) => {
  return (
    <div className={"sizer"} style={{ width: width }}>
      {children}
    </div>
  );
};
export default Sizer;
