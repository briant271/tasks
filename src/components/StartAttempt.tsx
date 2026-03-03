import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [progress, setProgress] = useState<boolean>(false);
    const [attempt, setAttempt] = useState<number>(4);

    return (
        <div>
            <Button onClick={() => {
                    setProgress(true);
                    !progress ? setAttempt(attempt - 1) : progress;
                }}
                disabled={progress || attempt === 0}
            > Start Quiz </Button>

            <Button onClick={() => { setProgress(false);}} disabled={!progress}>
                Stop Quiz
            </Button>

            <Button
                onClick={() => {
                    setAttempt(attempt + 1);
                }}
                disabled={progress}
            >
                Mulligan
            </Button>

            <p>{attempt}</p>
        </div>
    );
}
