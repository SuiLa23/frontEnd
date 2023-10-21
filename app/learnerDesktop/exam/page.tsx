"use client";
import Quiz from "@/components/Quiz";
import { useState } from "react";
import Select from "react-select";
const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Earth"],
  },
  // Add more questions here
];

const difficultyLevel = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];
const reliabilityLevel = [
  { value: "low", label: "low (10 questions)" },
  { value: "medium", label: "medium (50 questions)" },
  ,
  { value: "high", label: "high (100 questions)" },
];

export default function Exam() {
  const [onGoingExam, setOnGoingExam] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [difficulty, setDifficulty] = useState(difficultyLevel[0]);
  const [reliability, setReliability] = useState(reliabilityLevel[0]);

  const getQuizz = () => {
    setOnGoingExam(true);
    setQuestions(questions);
  };
  return (
    <div className="w-full h-full ml-4 bg-slate-200">
      <h1 className="w-full text-center text-2xl font-semibold text-black pt-4">
        Exam
      </h1>
      {onGoingExam ? (
        <div className="flex flex-col justify-around w-full text-black p-3">
          <h2>
            <i>Choose a level of difficulty :</i>
          </h2>
          <Select
            options={difficultyLevel}
            isClearable={false}
            onChange={(e: any) => setDifficulty(e)}
            value={difficulty}
          />
          <h2>
            <i>Choose a level of reliability :</i>
          </h2>
          <Select
            options={reliabilityLevel}
            isClearable={false}
            onChange={(e: any) => setReliability(e)}
            value={reliability}
          />
          <button
            onClick={() => getQuizz()}
            className="bg-blue-500 text-white  px-4 py-2 rounded mt-4 w-1/5 text-center h-full justify-end flex"
          >
            Pay to get Quizz
          </button>
        </div>
      ) : (
        <>
          <Quiz></Quiz>
        </>
      )}
    </div>
  );
}
