import { useEffect, useState } from "react";
import "./CoursesCardSearch.css";

function CoursesCardSearch({ id, title, img, description, price }) {
  const imgNotFound =
    "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";

  const [course, setCourse] = useState({});

  useEffect(() => {
    setCourse({
      id,
      title,
      description,
      price,
      img,
    });
  }, []);

  const buyItem = () => {
    console.log(course);

    //obtiene todos los usuarios registrados
    const coursesArrString = sessionStorage.getItem("cartCourses");
    let coursesArr = JSON.parse(coursesArrString);

    if (coursesArr === null) coursesArr = [];

    if (coursesArr.some((c) => c.id == course.id)) return;

    //aniade un nuevo usario para registrarse
    coursesArr.push(course);
    console.log(course);
    //guarda la lista de usauarios en session storage
    sessionStorage.setItem("cartCourses", JSON.stringify(coursesArr));
  };

  return (
    <article className="container_coursesCardSearch green-border">
      <div>
        <img
          className="img-course_coursesCardSearch"
          src={img ? img : imgNotFound}
          alt=""
        />
        <div className="price-course_coursesCardSearch">
          <span>{price ? "$ " + price : "no hay stock"}</span>
        </div>
      </div>
      <div className="second-divition_coursesCardSearch green-color">
        <div>
          <h3 className="three-paraph-dots-text">{title}</h3>
          <p className="three-paraph-dots-text">{description}</p>
        </div>
        <div>
          <button
            onClick={buyItem}
            className="btn-buy_coursesCardSearch green-border "
          >
            Comprar
          </button>
          <button className="btn-info_coursesCardSearch green-border green-color">
            Mas informacion
          </button>
        </div>
      </div>
    </article>
  );
}

export default CoursesCardSearch;
