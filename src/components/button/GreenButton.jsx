import "./GreenButton.css";

function GreenButton({ prop, children, callback }) {
  return (
    <button onClick={callback} className="button-green_component" {...prop}>
      {children}
    </button>
  );
}

export default GreenButton;
