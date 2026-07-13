import "./Loader.css";

const Loader = ({ size = 40 }) => {
  return (
    <div className="loader-container">
      <div
        className="loader-spinner"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
    </div>
  );
};

export default Loader;