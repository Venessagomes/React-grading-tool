import React, { useState } from "react";
import "./App.css";
import Grades from "./components/Grades/Grades";
import NewGrade from "./components/NewGrade/NewGrade";

function App(props) {
  const dummy_grades = [
    {
      id: "e1",
      name: "Venessa",
      score: 94.12,
      date: new Date(2019, 7, 14),
    },
    { id: "e2", name: "Gobi", score: 79.49, date: new Date(2022, 2, 12) },
    {
      id: "e3",
      name: "Aidan",
      score: 29.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      name: "Tara",
      score: 45.1,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      name: "Avi",
      score: 76.1,
      date: new Date(2019, 3, 12),
    },
    {
      id: "e6",
      name: "Vivek",
      score: 85.4,
      date: new Date(2019, 5, 3),
    },
    {
      id: "e7",
      name: "Swetha",
      score: 93.4,
      date: new Date(2022, 6, 6),
    },

  ];

  const [grades, setGrades] = useState(dummy_grades);

  const addGradeHandler = (grade) => {
    setGrades ((prevGrade) => {
      return[grade, ...prevGrade]
    })
  };

  return (
    <div>
      <h2><NewGrade onAddGrade={addGradeHandler} /></h2>
      <Grades items={grades} />
    </div>
  );
}

export default App;
