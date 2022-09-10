import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

const QuizForm = (props) => {
    const param = useParams();
    const quizId = param.quizId;

    const [isoption1Solution, setOption1Solution] = useState(false);
    const [isoption2Solution, setOption2Solution] = useState(false);
    const [isoption3Solution, setOption3Solution] = useState(false);
    const [isoption4Solution, setOption4Solution] = useState(false);
    const [isoption5Solution, setOption5Solution] = useState(false);

    const option1Ref = useRef();
    const option2Ref = useRef();
    const option3Ref = useRef();
    const option4Ref = useRef();
    const option5Ref = useRef();

    const options = props.data.options;
    const isMultiChoice = props.data.isMultiChoice;

    let isError = false;

    useEffect(() => {
        let count = 0;

        count += isoption1Solution;
        count += isoption2Solution;
        count += isoption3Solution;
        count += isoption4Solution;
        count += isoption5Solution;

        if((isMultiChoice && count!=1) || (count==0)){
            isError = true;
        }
        else{
            isError = false;
        }

    }, [isoption1Solution, isoption2Solution, isoption3Solution, isoption4Solution, isoption5Solution]);

    const formSubmitHandler = () => {
        let solutions = [];

        if(isoption1Solution){
            solutions.push(options[0]);
        }

        if(isoption2Solution){
            solutions.push(options[1]);
        }

        if(isoption3Solution){
            solutions.push(options[2]);
        }

        if(isoption4Solution){
            solutions.push(options[3]);
        }

        if(isoption5Solution){
            solutions.push(options[4]);
        }

        console.log(solutions);
    };


    return (
        <Fragment>
            <form className={classes.form} onSubmit={formSubmitHandler}>
                <label>Question</label><br />
                <label>Option 1</label><br />
                <p ref={option1Ref}>{options[0]}</p>
                <Checkbox label="isSolution" isSolution={setOption1Solution} />
                <br />
                <label>Option 2</label><br />
                <p ref={option2Ref}>{options[1]}</p>
                <Checkbox label="isSolution" isSolution={setOption2Solution} />
                <br />
                <label>Option 3</label><br />
                <p ref={option3Ref}>{options[2]}</p>
                <Checkbox label="isSolution" isSolution={setOption3Solution} />
                <br />
                <label>Option 4</label><br />
                <p ref={option4Ref}>{options[3]}</p>
                <Checkbox label="isSolution" isSolution={setOption4Solution} />
                <br />
                <label>Option 5</label><br />
                <p ref={option5Ref}>{options[4]}</p>
                <Checkbox label="isSolution" isSolution={setOption5Solution} />
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </Fragment>
    );
};

export default QuizForm;