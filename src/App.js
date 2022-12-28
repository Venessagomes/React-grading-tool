import "./App.css";
import Grades from "./components/Grades/Grades";
import NewGrade from "./components/NewGrade/NewGrade";

function App() {
  const grades = [
    {
      id: "e1",
      name: "Venessa",
      score: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", name: "Gobi", score: 79.49, date: new Date(2021, 2, 12) },
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
  ];
  return (
    <div>
      <NewGrade />
      <Grades items={grades} />
    </div>
  );
}

export default App;
