import React from "react";
import "./NewGrade.css";
import GradeForm from "./GradeForm";

const NewGrades = (props) => {
  const saveGradeDataHandler = (enteredGradeData) => {
    const gradeDataaa = {
      ...enteredGradeData,
      id: Math.random().toString(),
    };
    props.onAddGrade(gradeDataaa);
  };

  return (
    <div className="new-grade">
      <GradeForm onSaveGradeData={saveGradeDataHandler} />
    </div>
  );
};

export default NewGrades;
