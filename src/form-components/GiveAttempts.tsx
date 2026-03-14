import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [reqAttempts, setReqAttempts] = useState<number>(0);

    function updateRequests(event: React.ChangeEvent<HTMLInputElement>) {
        setReqAttempts(Number(event.target.value));
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
            <h3>Give Attempts</h3>
            <p>Number of Attempts Left: {attempts}</p>
            <Form.Group controlId="numberBox">
                <Form.Label>Input num of requests:</Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={updateRequests}
                />
            </Form.Group>

            <button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts <= 0}
            >
                Use
            </button>
            <button
                onClick={() => {
                    setAttempts(attempts + reqAttempts);
                }}
            >
                Gain
            </button>
        </div>
    );
}
