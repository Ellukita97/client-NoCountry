import { useEffect, useState } from "react";
import GreenButton from "../../button/GreenButton";
import "./userSection.component.css";
import SelectNavUser from "../../select/SelectNavUser";

function UserSectionNavComponent() {
  const [user, setUser] = useState({});
  const [cantCardCourses, setCantCardCourses] = useState(0);

  const imgNotFound = "https://cdn-icons-png.flaticon.com/512/625/625230.png";

  useEffect(() => {
    const userStringlify = sessionStorage.getItem("userRegistred");
    const userObj = JSON.parse(userStringlify);
    const coursesArrString = sessionStorage.getItem("cartCourses");
    let coursesArr = JSON.parse(coursesArrString);
    if (coursesArr) setCantCardCourses(coursesArr.length);
    setUser(userObj);
  }, []);

  const handdleChange = (e) => {
    const value = e.target.value;
    if (value === "cerrar session") {
      sessionStorage.removeItem("userRegistred");
      window.location.href = "/";
    }
  };

  if (!user)
    return (
      <>
        <a href="/login">
          <GreenButton>Iniciar Sesion</GreenButton>
        </a>
        <a href="/registrer">
          <GreenButton>Registrarse</GreenButton>
        </a>
      </>
    );

  return (
    <div className="container_UserSectionNavComponent">
      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
      <SelectNavUser onChangeCallback={handdleChange}>
        <option onChange={handdleChange} defaultValue={user.name}>
          {user.name}
        </option>
        <option value="cerrar session">cerrar session</option>
      </SelectNavUser>
      <a
        href="/cart"
        style={{
          backgroundColor: "#6dd0b3",
          borderRadius: "50%",
          height: "100%",
          width: "100%",
          position: "relative",
        }}
      >
        <img src={imgNotFound} alt="" />
        {cantCardCourses == 0 ? (
          ""
        ) : (
          <span className="btn-red_UserSectionNavComponen">
            {cantCardCourses}
          </span>
        )}
      </a>
    </div>
  );
}

export default UserSectionNavComponent;
