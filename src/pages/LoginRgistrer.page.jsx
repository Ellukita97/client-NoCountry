import { useState } from "react";
import Formulario from "../components/forms/FormUser";
import FormLoginUser from "../components/forms/FormLoginUser";
import "./LoginRgistrer.page.css";

function LoginRgistrerPage({ isLogin }) {
  const [login] = useState(isLogin ? true : false);

  return (
    <>
      <a style={{zIndex:"1000"}} href="/">
        <button className="return-btn_LoginRgistrerPage">REGRESAR</button>
      </a>

      <section className="container_LoginRgistrerPage">
        {login ? <FormLoginUser /> : <Formulario />}
      </section>
    </>
  );
}

export default LoginRgistrerPage;
