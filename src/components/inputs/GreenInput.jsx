import "./GreenInput.css";

function GreenInput({ placeholder, onChangeCallback }) {
  return (
    <input
      onChange={onChangeCallback}
      type="text"
      placeholder={placeholder}
      className="input-green_component"
    />
  );
}

export default GreenInput;
