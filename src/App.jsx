import { useEffect, useState } from "react";

import "./App.css";
import Quiz from "./components/Quiz.jsx";
import Timer2 from "./components/Timer2";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [gameLoose, setGameLoose] = useState(false);
  const [earned, setEarned] = useState(" $ 0");

  // quiz qution data
  const data = [
    {
      id: 1,
      question: "The deepest ocean of the world ?",
      answers: [
        {
          option: "Atlantic",
          correct: false,
        },
        {
          option: "Antarctic",
          correct: false,
        },
        {
          option: "Pacific",
          correct: true,
        },
        {
          option: "Indian Ocean",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What is the capital of Ghana'?",
      answers: [
        {
          option: "Accra",
          correct: true,
        },
        {
          option: "Tel Abib",
          correct: false,
        },
        {
          option: "Tehran",
          correct: false,
        },
        {
          option: "Birmingham",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "which is the deepest lake of the world ?",
      answers: [
        {
          option: "Caspian Sea",
          correct: false,
        },
        {
          option: "Dal lake",
          correct: false,
        },
        {
          option: " Superior Lake",
          correct: false,
        },
        {
          option: " lake Baikal",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "The country U.K is situated in the continent ?",
      answers: [
        {
          option: "Asia ",
          correct: false,
        },
        {
          option: "Africa",
          correct: false,
        },
        {
          option: "Austrailia ",
          correct: false,
        },
        {
          option: "Europe",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Who was the first S.C chief minister of Bihar ?",
      answers: [
        {
          option: "Nitish kumar ",
          correct: false,
        },
        {
          option: "Lalu Prasad yadav",
          correct: false,
        },
        {
          option: "Karpuri Thakur ",
          correct: true,
        },
        {
          option: "Sri Krishna Singh",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "What is the new capital of Sri Lanka ?",
      answers: [
        {
          option: "yangoon ",
          correct: false,
        },
        {
          option: "colombo",
          correct: false,
        },
        {
          option: "Shri Radhikapuram ",
          correct: false,
        },
        {
          option: "Sri Jayavardhanpuram",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "Which is called Gold Coast ?",
      answers: [
        {
          option: " Gueni",
          correct: false,
        },
        {
          option: "Ghana",
          correct: true,
        },
        {
          option: " Benin",
          correct: false,
        },
        {
          option: "Somalia",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who is the largest producer of Diamond ?",
      answers: [
        {
          option: "America  ",
          correct: false,
        },
        {
          option: "Russia",
          correct: true,
        },
        {
          option: "England ",
          correct: false,
        },
        {
          option: "China",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "what is the full name of Bapu/?",
      answers: [
        {
          option: "Mohan Das Karamchndra Gandhi ",
          correct: true,
        },
        {
          option: "/Bhabmgtu",
          correct: false,
        },
        {
          option: "bgfh",
          correct: false,
        },
        {
          option: "Aurangjeb",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who called Gandhi 'the rastpita' first time  ?",
      answers: [
        {
          option: "Rabindra Nath tagore ",
          correct: false,
        },
        {
          option: "Vivekananda",
          correct: false,
        },
        {
          option: "Bhagat Singh ",
          correct: false,
        },
        {
          option: "Subhash Chandra Bose",
          correct: true,
        },
      ],
    },
  ];
  // data for money pyramid
  const prize = [
    { id: 1, amount: "$ 10,000" },
    { id: 2, amount: "$ 20,000" },
    { id: 3, amount: "$ 50,000" },
    { id: 4, amount: "$ 1,00,000" },
    { id: 5, amount: "$ 10,00,000" },
    { id: 6, amount: "$ 25,00,000" },
    { id: 7, amount: "$ 50,00,000" },
    { id: 8, amount: "$ 1,00,00,000" },
    { id: 9, amount: "$ 2,00,00,000" },
    { id: 10, amount: "$ 10,00,00,000" },
  ].reverse();

 

 
  // Function to decide the earned amount
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(prize.find((a) => a.id === questionNumber - 1).amount);
  }, [questionNumber, prize]);

  return (
    <>
      <div className="app">
        <div className="main">
          {/* conditionally rendering jsx 'wether prize amount or question' */}
          {gameLoose ? (
            <div className="endText">
              {" "}
              <h1>you earned Amount {earned} </h1>
            </div>
          ) : (
            <>
              <div className="top">
                <div className="timer">
                  <Timer2
                    setGameLoose={setGameLoose}
                    questionNumber={questionNumber}
                  />{" "}
                </div>
              </div>

              <div className="bottom">
                <Quiz
                  data={data}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                  gameLoose={gameLoose}
                  setGameLoose={setGameLoose}
                />
              </div>
            </>
          )}
        </div>
        {/* div for money pyramid */}
        <div className="mPyramid">
          <ul className="moneyList">
            {prize.map((m) => (
              <li
                className={
                  questionNumber == m.id
                    ? "moneyListItem active"
                    : "moneyListItem "
                }
                key={m.id}
              >
                <span className="moneyListItemNumber">{m.id}</span>
                <span className="moneyLIstItemAmount">{m.amount}</span>
              </li>
            ))}
            {/* <li className="moneyListItem active"><span className='moneyListItemNumber'>2</span>  <span className='moneyLIstItemAmount'>$ 200</span></li> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
