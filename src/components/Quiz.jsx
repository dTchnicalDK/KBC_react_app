import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3"
import correct from "../sounds/correct.mp3"
import wrong from "../sounds/wrong.mp3"
import wait from "../sounds/wait.mp3"

export default function Quiz({
  data,
  questionNumber,
  setQuestionNumber,
  gameLoose,
  setGameLoose,
}) {
  const [quizQuestion, setQuizQuestion] = useState(null);
  const [selectedAnswere, setSelectedAnswere] = useState(null);
  const [classname, setClassname] = useState("option");

  const [letsPlay] = useSound(play)
  const [correctSound] = useSound(correct)
  const [wrongSound] = useSound(wrong)
  const [waitSound] = useSound(wait)

  useEffect(()=>{
    letsPlay();
  },[letsPlay])
  

  // const delay = (duration, callback) => {
  //   setTimeout(() => {
  //     callback();
  //   }, duration);
  // };
  // function to controll what after choosing any option
  const handleClick = (o) => {
    setSelectedAnswere(o);
    setClassname("option active");
    // checking wether choosen option is correct or not (two same function,  2nd is commented )
    // delay(3000, setClassname(o.correct ? "option correct" : "option wrong"));
    setTimeout(() => {
      setClassname(o.correct ? "option correct" : "option wrong");
    }, 3000);

    // if choosen ans is correct then highlight the next amount
    setTimeout(() => {
      if (o.correct) {
        setQuestionNumber(questionNumber + 1);
        correctSound();
      } else {
        
        setGameLoose(true);
        wrongSound();
      }
    }, 6000);
  };

  useEffect(() => {
    setQuizQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  return (
    <div className="quiz">
      <div className="question">{quizQuestion?.question}</div>
      <div className="options">
        {quizQuestion?.answers.map((o) => (
          <div
            className={selectedAnswere == o ? classname : "option"}
            onClick={() => handleClick(o)}
          >
            {o.option}
          </div>
        ))}
      </div>
    </div>
  );
}
