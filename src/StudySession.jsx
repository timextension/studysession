import { useState } from "react";

function StudySession(props) {

    const [minutes, setMinutes] = useState(0);
    const [isGoalMet, setIsGoalMet] = useState(false);

    function increaseMinutes() {
        setMinutes(minutes + 15);
        checkMinutesAndGoal(minutes + 15);
    }

    function resetMinutes() {
        setMinutes(0);
        setIsGoalMet(false);
    }

    function checkMinutesAndGoal(x) {
        {
            x >= props.goal && (setIsGoalMet(true),
                console.log("yes", minutes, x, props.goal, isGoalMet))
        }
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.session}</h2>
            <p>Aihe: {props.subject}</p>
            <p>Tavoite: {props.goal} minuuttia</p>
            <p>Tehty: {minutes} minuuttia</p>
            <p>{isGoalMet ? "Tavoite saavutettu!" : "Tavoite on vielä kesken."}</p>
            <div>
                <button onClick={increaseMinutes}>+15 min</button>
                <button onClick={resetMinutes}>Nollaa</button>
            </div>
        </div>
    );
}

export default StudySession;