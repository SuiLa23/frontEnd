"use client";
import Quiz from "@/components/Quiz";
import { useState } from "react";
import Select from "react-select";
import { Circles } from "react-loader-spinner";
const questions: Array<Question> = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Earth"],
    correctAnswer: "Mars",
  },
  // Add more questions here
];
interface Question {
  question: string;
  options: Array<string>;
  correctAnswer: string;
}

const difficultyLevel = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

export default function Practice() {
  const [difficulty, setDifficulty] = useState(difficultyLevel[0]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [question, setQuestion] = useState<Question>();
  const [verified, setVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOptionChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };
  const verify = () => {
    setVerified(true);
  };
  const getQuestion = async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setQuestion(questions[0]);
    setVerified(false);
    setIsLoading(false);
  };
  return (
    <>
      <div className="w-full h-full ml-4 bg-slate-200">
        <h1 className="w-full text-center text-2xl font-semibold text-black pt-4">
          Practice questions
        </h1>
        <div className="flex flex-row justify-around w-full text-black p-3">
          <h2>
            <i>Choose a level of difficulty :</i>
          </h2>
          <Select
            options={difficultyLevel}
            isClearable={false}
            onChange={(e: any) => setDifficulty(e)}
            value={difficulty}
          />
        </div>
        <div className="container mx-auto w-full h-full p-4 text-black ">
          {isLoading ? (
            <>
              <div className="w-full justify-center flex p-4">
                <Circles
                  height="50"
                  width="50"
                  color="gray"
                  ariaLabel="loading"
                />
              </div>
            </>
          ) : question == null ? (
            <div className="flex justify-center">
              <button
                className="bg-blue-500 text-white font-semibold px-4 py-2 rounded mt-4"
                onClick={(e) => getQuestion()}
              >
                get question
              </button>
            </div>
          ) : (
            <>
              <div className="bg-white p-4 rounded shadow-md">
                <p className="text-lg text-black my-2">{question.question}</p>
                <ul>
                  {question.options.map((option, index) => (
                    <li key={index} className="mb-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value={option}
                          checked={selectedOption === option}
                          onChange={() => handleOptionChange(option)}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
                <div className="w-full justify-end flex">
                  {!verified ? (
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                      onClick={() => verify()}
                    >
                      Verify
                    </button>
                  ) : (
                    <button
                      className="bg-blue-500 text-white  px-4 py-2 rounded mt-4"
                      onClick={() => getQuestion()}
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
