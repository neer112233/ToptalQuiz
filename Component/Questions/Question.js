import { Fragment } from "react";
import Checkbox from "../Layout/Checkbox";

const DUMMY_QUESTIONS = [
    {
      id: "q1",
      description: "Questions 1",
      options: ["option11", "option21", "option31"],
      solution: ["option11", "option21"],
      isMultiChoice: true
    },
    {
      id: "q2",
      description: "Questions 2",
      options: ["option21", "option22", "option23"],
      solution: ["option21", "option22", "option23"],
      isMultiChoice: true
    },
    {
      id: "q3",
      description: "Questions 3",
      options: ["option13", "option23", "option33"],
      solution: ["option33"],
      isMultiChoice: true
    },
    {
      id: "q4",
      description: "Questions 4",
      options: ["option14", "option24", "option34"],
      solution: ["option14", "option34"],
      isMultiChoice: true
    }
  ];

const Question = (props) => {
    const question = DUMMY_QUESTIONS[0].description;
    const options = DUMMY_QUESTIONS[0].options;

    const optionsList = options.map(option => <Checkbox label={option} />);
    const questionData = <select>{optionsList}</select>;

    return (
        <Fragment>
            {question}
            <br></br>
            {optionsList}
        </Fragment>
    );
};

export default Question;