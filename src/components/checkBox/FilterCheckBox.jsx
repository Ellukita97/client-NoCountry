import './FilterCheckBox.css'

function FilterCheckBox({children}) {
  return (
    <div className="green-color input_filter-container">
        <input className="input_filter-checkBox" type="checkbox" name="" id="" />
        <span>{children}</span>
    </div>
  );
}

export default FilterCheckBox;
