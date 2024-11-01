import './SelectNavUser.css'

function SelectNavUser({ children, onChangeCallback }) {
  return <select onChange={onChangeCallback} className="select-green_component">{children}</select>;
}

export default SelectNavUser;
