import CoursesCardSearch from "../components/card/CoursesCardSearch";
import FilterCheckBox from "../components/checkBox/FilterCheckBox";
import "./App.css";
import courses from "../mocks/courses";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addCoursesArr } from "../redux/coursesSlice";

function App() {
  const CourseType = ["Desarrollo Web", "Programacion", "Disenio", "IA"];
  const CourseModality = ["Gratis", "Centificada", "Paga"];

  const { coursesToSearch } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCoursesArr(courses));
  }, []);

  return (
    <article className="container-App_page">
      <div>
        <h2 className="green-color">
          El futuro lo diseñas tu, empieza a programar hoy
        </h2>
        <h3 className="green-color">
          Explora toda nuestra categoria de cursos
        </h3>
      </div>
      <div className="container-2_App">
        <div className="green-border filter-container">
          <h3 className="green-color">Filtros</h3>
          <h4 className="green-color">Cursos</h4>
          {CourseType.map((c, i) => (
            <FilterCheckBox key={i}>{c}</FilterCheckBox>
          ))}
          <hr className="green-border" />
          <h4 className="green-color">Modalidad</h4>
          {CourseModality.map((c, i) => (
            <FilterCheckBox key={i}>{c}</FilterCheckBox>
          ))}
        </div>
        <div className="courses-card-container_App">
          {coursesToSearch.map((c) => (
            <CoursesCardSearch
              key={c.id}
              id={c.id}
              description={c.description}
              title={c.title}
              price={c.price}
              img={c.img}
            />
          ))}
          {coursesToSearch.length < 1 ? (
            <span className="not-found-text_App">
              No hay cursos encontrados...
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </article>
  );
}

export default App;
