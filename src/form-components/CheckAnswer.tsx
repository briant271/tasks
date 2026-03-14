import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Put answer here:</Form.Label>
                <Form.Control value={answer} onChange={updateName} />
            </Form.Group>
            <h1> {answer === expectedAnswer ? "✔️" : "❌"}</h1>
        </div>
    );
}
