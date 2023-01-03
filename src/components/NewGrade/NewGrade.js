import React, { useState } from "react";
import "./NewGrade.css";
import GradeForm from "./GradeForm";

const NewGrades = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveGradeDataHandler = (enteredGradeData) => {
    const gradeDataaa = {
      ...enteredGradeData,
      id: Math.random().toString(),
    };
    props.onAddGrade(gradeDataaa);
    setIsEditing(false)
  };

  const startEditing = () => {
    setIsEditing(true);
  };
const stopEditing = () => {
  setIsEditing(false)
}

  return (
    <div className="new-grade">
      {!isEditing && <button onClick={startEditing}>Add New Grade</button>}
      {isEditing && <GradeForm onSaveGradeData={saveGradeDataHandler} onCancel={stopEditing} />}
    </div>
  );
};

export default NewGrades;
