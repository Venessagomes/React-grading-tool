import React, { useState } from "react";
import "./GradeForm.css";

const GradeForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredScore, setEnteredScore] = useState("");

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const scoreChangeHandler = (e) => {
    setEnteredScore(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const gradeData = {
      name: enteredName,
      date: new Date(enteredDate),
      score: enteredScore,
    };
    props.onSaveGradeData(gradeData);

    setEnteredName("");
    setEnteredDate("");
    setEnteredScore("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-grade__controls">
        <div className="new-grade__control">
          <label>Name</label>
          <input
            type="text"
            onChange={nameChangeHandler}
            value={enteredName}
          ></input>
        </div>
        <div className="new-grade__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          ></input>
        </div>
        <div className="new-grade__control">
          <label>Score</label>
          <input
            type="number"
            min="0"
            max="100"
            step="0.01"
            onChange={scoreChangeHandler}
            value={enteredScore}
          ></input>
        </div>
      </div>
      <div className="new-grade__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Grade</button>
      </div>
    </form>
  );
};

export default GradeForm;
