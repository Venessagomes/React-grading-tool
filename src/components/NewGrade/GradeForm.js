import React from "react";
import "./GradeForm.css";

const GradeForm = () => {
  return (
    <form>
      <div className="new-grade__controls">
        <div className="new-grade__control">
          <label>Name</label>
          <input type="text"></input>
        </div>
        <div className="new-grade__control">
          <label>Date</label>
          <input type="date" min="2017-01-01" max="2022-12-31"></input>
        </div>
        <div className="new-grade__control">
          <label>Score</label>
          <input type="number" min="0" max="100" step="0.01"></input>
        </div>
      </div>
      <div className="new-grade__actions">
        <button type="submit">Add Grade</button>
      </div>
    </form>
  );
};

export default GradeForm;
