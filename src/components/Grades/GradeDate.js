import React from "react";
import "./GradeDate.css"

const GradeDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="grade-date">
      <div className="grade-date__month">{month}</div>
      <div className="grade-date__year">{year}</div>
      <div className="garde-date__day">{day}</div>
    </div>
  );
};

export default GradeDate;
