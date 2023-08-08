import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questionsArray, setQuestionsArray}) {

  console.log(questionsArray)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsArray.map((question) => (
        <QuestionItem
        key={question.id}
        id={question.id}
        prompt={question.prompt}
        answers={question.answers}
        correctIndex={question.correctIndex}
        questionsArray={questionsArray}
        setQuestionsArray={setQuestionsArray}
        />
      ))}</ul>
    </section>
  );
}

export default QuestionList;
