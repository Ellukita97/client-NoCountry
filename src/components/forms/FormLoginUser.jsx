import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./FormUser.css";
import { useDispatch } from "react-redux";
import { addCurrentUser } from "../../redux/userSlice";

function FormLoginUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const dispatch = useDispatch();

  const [existLogin, serExistLogin] = useState(true);

  const password = useRef(null);
  password.current = watch("password", "");

  const onSubmit = handleSubmit((data) => {
    //obtiene todos los usuarios registrados
    const userArrString = sessionStorage.getItem("usuario");
    const userArr = JSON.parse(userArrString);

    if (!userArr) return serExistLogin(false);

    //busca si existe el usuario
    const user = userArr.filter((u) => {
      return (
        data.email.includes(u.email) &&
        data.password.includes(u.password) &&
        data.name.includes(u.name)
      );
    });

    if (!user[0]) serExistLogin(false);
    else {
      //lo agrega a el context
      serExistLogin(true);
      sessionStorage.setItem("userRegistred", JSON.stringify(user[0]));
      window.location.href = "/";
    }
  });

  return (
    <>
      <form className="form-user" onSubmit={onSubmit}>
        <h2 className="title_form-user">Iniciar Session</h2>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            {...register("name", {
              required: {
                value: true,
                message: "Nombre es requerido",
              },
              maxLength: 20,
              minLength: 2,
            })}
          />
          {errors.name?.type === "required" && <span>Nombre requerido</span>}
          {errors.name?.type === "maxLength" && (
            <span>Nombre no debe ser mayor a 20 caracteres</span>
          )}
          {errors.name?.type === "minLength" && (
            <span>Nombre debe ser mayor a 2 caracteres</span>
          )}
        </div>

        <div>
          <label>Correo Electrónico:</label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: {
                value: true,
                message: "Correo es requerido",
              },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Correo no válido",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: {
                value: true,
                message: "Contraseña es requerida",
              },
              minLength: {
                value: 6,
                message: "Contraseña debe ser mayor a 6 caracteres",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        {!existLogin ? <span>El usuario no existe</span> : ""}
        <button className="button_form-user" type="submit">
          Iniciar Session
        </button>

        <hr />
        <a href="/registrer">¿No estás registrado? Registrate</a>
        <img
          className="icon_form-user"
          src="data:image/png;base64,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"
        />
        <img
          className="icon2_form-user"
          src="data:image/png;base64,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"
        />
      </form>
    </>
  );
}

export default FormLoginUser;
