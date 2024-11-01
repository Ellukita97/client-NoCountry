import "./NavBar.style.css";
import img from "../../assets/mentor-digital-transparente-3.png";
import GreenButton from "../button/GreenButton";
import GreenInput from "../inputs/GreenInput";
import UserSectionNavComponent from "./userSection/userSection.component";
import { useDispatch } from "react-redux";
import { sortByNameCourses } from "../../redux/coursesSlice";

function NavBarComponents() {

  const dispatch = useDispatch()

  const handdleChange = (e) =>{
    const textToSearch = e.target.value
    dispatch(sortByNameCourses(textToSearch))
  }

  return (
    <>
      <nav className="container_NavBar">
        <a href="/">
          <img src={img} className="logo-img_NavBar" loading="lazy" alt="" />
        </a>
        <div className="input-div_NavBar">
          <GreenInput onChangeCallback={handdleChange} placeholder="Buscar..." />
          <GreenButton>Q</GreenButton>
        </div>
        <div>
          <UserSectionNavComponent />
        </div>
      </nav>
    </>
  );
}

export default NavBarComponents;
