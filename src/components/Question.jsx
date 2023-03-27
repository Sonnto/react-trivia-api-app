import { useEffect, useState } from "react";

export default function Question() {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const getQuestion = async () => {
      let response = await fetch(
        "https://opentdb.com/api.php?amount=1&type=boolean"
      );
      let data = await response.json();
      console.log(`Here it is: ${JSON.stringify(data)}`);

      setCategory(data.results[0].category);
      setQuestion(data.results[0].question);
      setAnswer(data.results[0].correct_answer);
    }
    getQuestion();
  }, []);

  function revealButton() {
    setRevealed(true);
  }

  let theAnswer = <button onClick={revealButton}>Reveal Answer</button>;

  if (revealed) {
    theAnswer = <p>{answer}</p>;
  }

  return (
    <div>
      <div>{category}</div>
      <h3>{question}</h3>
      <div>{theAnswer}</div>
    </div>
  );
}
