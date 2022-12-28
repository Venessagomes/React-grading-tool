import React from "react";
import GradeItem from "./GradeItem";
import "./Grades.css";
import Card from "./Card";
const Grades = (props) => {
  return (
    <Card className="grades">
      <GradeItem
        name={props.items[0].name}
        score={props.items[0].score}
        date={props.items[0].date}
      />
      <GradeItem
        name={props.items[1].name}
        score={props.items[1].score}
        date={props.items[1].date}
      />
      <GradeItem
        name={props.items[2].name}
        score={props.items[2].score}
        date={props.items[2].date}
      />
      <GradeItem
        name={props.items[3].name}
        score={props.items[3].score}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Grades;
