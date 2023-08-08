import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List")
  const [questionsArray, setQuestionsArray] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(r => setQuestionsArray(r))
  }, [])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ?
      <QuestionForm
      questionsArray={questionsArray}
      setQuestionsArray={setQuestionsArray}/> : 
      <QuestionList
      questionsArray={questionsArray}
      setQuestionsArray={setQuestionsArray}/>}
    </main>
  );
}

export default App;
