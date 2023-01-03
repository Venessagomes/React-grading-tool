import React from "react";
import "./GradeList.css";
import GradeItem from "./GradeItem";

const GradeList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="grade-list__fallback">Found no grades</h2>;
  }
  return (
    <ul className="grade-list">
      {props.items.map((grade) => (
        <GradeItem
          key={grade.id}
          name={grade.name}
          score={grade.score}
          date={grade.date}
        />
      ))}
    </ul>
  );
};

export default GradeList;
