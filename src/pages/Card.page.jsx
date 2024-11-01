import { useEffect, useState } from "react";
import CoursesCardSearch from "../components/card/CoursesCardSearch";
import FormBuyCourse from "../components/forms/FromBuyCourse";
import "./Card.page.css";

function CardPage() {
  const [cartCourses, setCartCourses] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const coursesArrString = sessionStorage.getItem("cartCourses");
    let coursesArr = JSON.parse(coursesArrString);
    if (coursesArr == undefined) coursesArr = [];
    if (coursesArr.length > 1)
      setTotalPrice(cartCourses.reduce((acc, c) => c?.price + acc, 0));

    setCartCourses(coursesArr);
  }, []);

  return (
    <article className="container_CardPage">
      <section className="section-1_CardPage">
        <h2 className="title-course_CardPage">Cursos</h2>
        <div className="container-section_courses">
          {cartCourses.map((c) => (
            <CoursesCardSearch
              id={c.id}
              description={c.description}
              price={c.price}
              title={c.title}
              key={c.id}
              img={c.img}
            />
          ))}
        </div>
        <h3 style={{ color: "white" }}>Precio Total $ {totalPrice}</h3>
      </section>
      <section>
        <FormBuyCourse />
      </section>
    </article>
  );
}

export default CardPage;
