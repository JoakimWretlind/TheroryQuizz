import { useState } from "react";
import IQuestions from "../interfaces/ICategories";
import { Card, P } from "./style";

export const QuizzCard = (quizz: IQuestions) => {
  const { question, answer, answer2, answer3 } = quizz;
  const [flip, setFlip] = useState(false);

  return (
    <Card className={`${flip ? "flip" : ""}`} onClick={() => setFlip(!flip)}>
      <Card className="front">
        <P>{question}</P>
      </Card>
      <Card className="back">
        <P>{answer}</P>
        <P>{answer2}</P>
        <P>{answer3}</P>
      </Card>
    </Card>
  );
};
