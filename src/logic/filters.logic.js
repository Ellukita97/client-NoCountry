export const sortCoursesByNameLogic = (arrToSort, valueToSort) => {
  return arrToSort.filter((c) =>
    c.title.toUpperCase().includes(valueToSort.toUpperCase())
  );
};
