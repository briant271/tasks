import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <Form.Group controlId="answerOptions">
                <Form.Label>Choose an Answer:</Form.Label>
                <Form.Select
                    value={answer}
                    onChange={(e) => {
                        setAnswer(e.target.value);
                    }}
                >
                    {options.map((x) => (
                        <option key={x} value={x}>
                            {x}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <p>{answer == expectedAnswer ? "✔️" : "❌"} </p>
        </div>
    );
}
