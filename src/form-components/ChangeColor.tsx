import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const colors: string[] = [
    "red",
    "blue",
    "green",
    "purple",
    "azure",
    "magenta",
    "maroon",
    "skyblue",
];

export function ChangeColor(): React.JSX.Element {
    const [text, setText] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>

            <>
                {colors.map((c) => (
                    <Form.Check
                        inline
                        key={c}
                        type="radio"
                        name="colors"
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                        label={<span style={{ backgroundColor: c }}>{c}</span>}
                        value={c}
                        checked={text == c}
                    />
                ))}
            </>

            <p></p>
            <p
                data-testid="colored-box"
                style={{ backgroundColor: text, display: "inline-block" }}
            >
                You selected {text}
            </p>
        </div>
    );
}
