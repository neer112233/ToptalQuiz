import { Fragment, useContext, useEffect, useRef, useState } from "react";
import QuestionContext from "../../store/question-context";
import Button from "../Layout/Button";
import Checkbox from "../Layout/Checkbox";

import classes from './QuestionForm.module.css';

const QuestionForm = () => {
    const [isMultipleChoice, setMultipleChoice] = useState(false);
    const [isoption1Solution, setOption1Solution] = useState(false);
    const [isoption2Solution, setOption2Solution] = useState(false);
    const [isoption3Solution, setOption3Solution] = useState(false);
    const [isoption4Solution, setOption4Solution] = useState(false);
    const [isoption5Solution, setOption5Solution] = useState(false);
    const [isMultError, setMultError] = useState(false);

    const [allQuestion, setAllQuestions] = useState([]);

    const questionRef = useRef();
    const option1Ref = useRef();
    const option2Ref = useRef();
    const option3Ref = useRef();
    const option4Ref = useRef();
    const option5Ref = useRef();

    var multipleChoiceError;

    useEffect(() => {
        console.log("useEffect");        
        console.log(allQuestion);
    }, [allQuestion]);

    const formSubmitHandler = (event) => {
        //Add all the questions to backend
    };

    const nextButtonHandler = () => {
        setMultError(false);

        var count = 0;
        count += isoption1Solution;
        count += isoption2Solution;
        count += isoption3Solution;
        count += isoption4Solution;
        count += isoption5Solution;

        console.log(count);

        if(!isMultipleChoice){
            if(count!=1){
                multipleChoiceError = <p>Single Choice question can have only single answer.</p>
                setMultError(true);
                return;
            }
        }

        const question = questionRef.current.value;
        const option1 = option1Ref.current.value;
        const option2 = option2Ref.current.value;
        const option3 = option3Ref.current.value;
        const option4 = option4Ref.current.value;
        const option5 = option5Ref.current.value;

        var solution = [];
        var options = [];

        if(option1.length>0){
            options.push(option1);
        }

        if(option2.length>0){
            options.push(option2);
        }

        if(option3.length){
            options.push(option3);
        }

        if(option4.length>0){
            options.push(option4);
        }

        if(option5){
            options.push(option5);
        }

        if(isoption1Solution){
            solution.push(option1);
        }

        if(isoption2Solution){
            solution.push(option2);
        }

        if(isoption3Solution){
            solution.push(option3);
        }

        if(isoption4Solution){
            solution.push(option4);
        }

        if(isoption5Solution){
            solution.push(option5);
        }

        var qObj = {
            question: question,
            options: options,
            solution: solution
        };

        setAllQuestions([...allQuestion, qObj]);
    };

    return (
        <Fragment>
            <form className={classes.form} onSubmit={formSubmitHandler}>
                <Checkbox label="MultiChoice Question..." isSolution={setMultipleChoice} />
                <label>Question</label><br />
                <input ref={questionRef} label="question" /><br />
                <label>Option 1</label><br />
                <input ref={option1Ref} label="option1" />
                <Checkbox label="isSolution" isSolution={setOption1Solution} />
                <br />
                <label>Option 2</label><br />
                <input ref={option2Ref} label="option2" />
                <Checkbox label="isSolution" isSolution={setOption2Solution} />
                <br />
                <label>Option 3</label><br />
                <input ref={option3Ref} label="option3" />
                <Checkbox label="isSolution" isSolution={setOption3Solution} />
                <br />
                <label>Option 4</label><br />
                <input ref={option4Ref} label="option4" />
                <Checkbox label="isSolution" isSolution={setOption4Solution} />
                <br />
                <label>Option 5</label><br />
                <input ref={option5Ref} label="option5" />
                <Checkbox label="isSolution" isSolution={setOption5Solution} />
                <br />
                <input type="submit" value="Submit"></input>
            </form>
            <Button name="Next" onClick={nextButtonHandler}/>
            {isMultError && multipleChoiceError}
        </Fragment>
    );
};

export default QuestionForm;