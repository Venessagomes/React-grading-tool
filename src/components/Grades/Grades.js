import React, { useState } from "react";
import GradeList from "./GradeList";
import "./Grades.css";
import Card from "../UI/Card";
import GradeFilter from "./GradeFilter";
import GradeChart from "./GradeChart";

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
      <GradeChart grades={filteredGrades} />
      <GradeList items={filteredGrades} />
    </Card>
  );
};

export default Grades;
