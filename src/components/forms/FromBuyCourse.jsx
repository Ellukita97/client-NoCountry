import { useRef } from "react";
import { useForm } from "react-hook-form";
import "./FromBuyCourse.css";

function FormBuyCourse() {
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
      address: "",
      zipCode: "",
      password: "",
      cardNumber: "",
      nameCard: "",
      date: "",
      CVV: "",
    },
  });

  const password = useRef(null);
  password.current = watch("password", "");

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <form className="form-buy_card" onSubmit={onSubmit}>
        <h2 className="title_form-user">Finalizar tu compra</h2>
        <label className="sub-title_card">!Estas a un paso! Ingresa tus datos de pago</label>
        <div className="section-div_card">
          {/*Nombre Completo*/}
          <div>
            <label>Nombre Completo:</label>
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

          {/*Correo Electrónico*/}
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
        </div>

        <div className="section-div_card">
          {/*Direccion*/}
          <div>
            <label>Direccion:</label>
            <input
              type="text"
              name="address"
              {...register("address", {
                required: {
                  value: true,
                  message: "Direccion es requerida",
                },
                maxLength: 50,
                minLength: 2,
              })}
            />
            {errors.address?.type === "required" && (
              <span>Direccion requerido</span>
            )}
            {errors.address?.type === "maxLength" && (
              <span>Direccion no debe ser mayor a 50 caracteres</span>
            )}
            {errors.address?.type === "minLength" && (
              <span>Direccion debe ser mayor a 2 caracteres</span>
            )}
          </div>

          {/*Codigo postal*/}
          <div>
            <label>Codigo postal:</label>
            <input
              type="text"
              name="zipCode"
              {...register("zipCode", {
                required: {
                  value: true,
                  message: "Codigo postal es requerida",
                },
                maxLength: 5,
                minLength: 2,
              })}
              maxLength="5"
            />
            {errors.zipCode?.type === "required" && (
              <span>Codigo postal requerido</span>
            )}
            {errors.zipCode?.type === "maxLength" && (
              <span>Codigo postal no debe ser mayor a 5 caracteres</span>
            )}
            {errors.zipCode?.type === "minLength" && (
              <span>Codigo postal debe ser mayor a 2 caracteres</span>
            )}
          </div>
        </div>

        {/*Contraseña*/}
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

        {/*Numero de Tarjeta*/}
        <div>
          <label>Numero de Tarjeta:</label>
          <input
            type="cardNumber"
            name="cardNumber"
            {...register("cardNumber", {
              required: {
                value: true,
                message: "Numero de Tarjeta es requerida",
              },
              minLength: {
                value: 16,
                message: "Numero de Tarjeta debe ser de a 16 caracteres",
              },
            })}
            maxLength={16}
          />
          {errors.cardNumber && <span>{errors.cardNumber.message}</span>}
        </div>

        <div className="section-div_card">
          {/*Fecha de vencimiento*/}
          <div>
            <label>Fecha de vencimiento:</label>
            <input
              type="date"
              name="date"
              {...register("date", {
                required: {
                  value: true,
                  message: "Fecha de vencimiento es requerida",
                },
                minLength: {
                  value: 4,
                  message: "Fecha de vencimiento debe ser de a 4 caracteres",
                },
              })}
              maxLength={4}
            />
            {errors.date && <span>{errors.date.message}</span>}
          </div>

          {/*CVV*/}
          <div>
            <label>CVV:</label>
            <input
              type="CVV"
              name="CVV"
              {...register("CVV", {
                required: {
                  value: true,
                  message: "CVV es requerida",
                },
                minLength: {
                  value: 3,
                  message: "CVV debe ser de a 16 caracteres",
                },
              })}
              maxLength={3}
            />
            {errors.CVV && <span>{errors.CVV.message}</span>}
          </div>
        </div>

        <button className="button_form-user" type="submit">
          Realizar compra
        </button>
      </form>
    </>
  );
}

export default FormBuyCourse;
