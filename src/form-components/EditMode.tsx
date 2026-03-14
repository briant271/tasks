import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): React.JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    const [isEdit, setEdit] = useState<boolean>(false);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="modeSwitch"
                label="Edit Mode"
                checked={isEdit}
                onChange={(e) => {
                    setEdit(e.target.checked);
                }}
            />

            {isEdit ?
                <>
                    <Form.Group controlId="nameBox">
                        <Form.Label>Enter name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={(e) => {
                            setStudent(e.target.checked);
                        }}
                    />
                </>
            :   <p>
                    {name} is {isStudent ? "a student" : "not a student"}
                </p>
            }
        </div>
    );
}
