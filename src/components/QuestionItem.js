import React from "react";

function QuestionItem({ id,
  prompt,
  answers,
  correctIndex,
  questionsArray,
  setQuestionsArray }) {

    function handleChange(event) {
      let newAnswerIndex = event.target.value
      fetch(`http://localhost:4000/questions/${id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "correctIndex": newAnswerIndex
        })
      })
      .then(r => r.json())
      .then(updatedQuestion => setQuestionsArray([updatedQuestion]))
    }


  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(id) {
    fetch(`http://localhost:4000/questions/${id}`, {method: 'DELETE'})
    .then(console.log("deleted"))
    setQuestionsArray(questionsArray.filter(question => question.id !== id))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => handleDelete(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
