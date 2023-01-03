import React, { useState } from "react";
import GradeList from "./GradeList";
import "./Grades.css";
import Card from "../UI/Card";
import GradeFilter from "./GradeFilter";

const Grades = (props) => {
  const [filteredYear, setFilteredYear] = useState("2018");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredGrades = props.items.filter((grade) => {
    return grade.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="grades">
      <GradeFilter
        selected={filteredYear}
        onChangeHandler={filterChangeHandler}
        />
      <GradeList items={filteredGrades}/>
    </Card>
  );
};

export default Grades;
