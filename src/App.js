import React, { useEffect, useState } from "react";
import Questions from "./app/components/Questions";

const QUESTIONS = [
  {
    question: "2*(4+4) sonucu nedir?",
    answers: ["2", "4", "8", "16"],
    correct: 3,
  },
  {
    question: "9*9 sonucu nedir?",
    answers: ["18", "81", "80", "79"],
    correct: 1,
  },
  {
    question: "Formula 1'in 2022 şampiyonu kimdir?",
    answers: [
      "Max Verstappen",
      "Charles Leclerd",
      "Lewis Hamilton",
      "Lando Norris",
    ],
    correct: 0,
  },
  {
    question: "Formula 1 takviminde ilk sırada hangi grand prix vardır?",
    answers: [
      "Bahreyn Grand Prix",
      "Suudi Arabistan Grand Prix",
      "Avustralya Grand Prix",
      "Emilia Romagna Grand Prix",
    ],
    correct: 0,
  },
  {
    question: "Hangisi Formula 1 takımlarından değildir?",
    answers: [
      "Ford-AMG F1 Team",
      "Alfa Romeo F1 Team Orlen",
      "BWT Alpine F1 Team",
      "Oracle Red Bull Racing",
    ],
    correct: 0,
  },
];

function App() {
  return <Quiz questions={QUESTIONS} />;
}

const Quiz = ({ questions }) => {
  // KODUNUZ BURAYA GELECEK

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finalResult, setFinalResult] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const currentQ = questions[currentQuestion];

  const handleClick = (index) => {
    setCurrentQuestion(currentQuestion + 1);
    console.log("tıklanan değer", index);

    if (currentQ.correct === index) {
      setCorrectAnswers((pre) => pre + 1);
    } else {
      setWrongAnswers((pre) => pre + 1);
    }

    setFinalResult((correctAnswers / (correctAnswers + wrongAnswers)) * 100);
  };

  return (
    <>
      <div className="mt-10 ml-10">
        {currentQuestion === questions.length ? (
          <p className="font-bold text-xl">
            Sınav sonucunuz: %{finalResult.toFixed(0)}
          </p>
        ) : (
          <Questions question={currentQ} handleClick={handleClick} />
        )}
      </div>
    </>
  );
};

export default App;
