import React, { useState } from "react";
import { Button } from "react-bootstrap";

const alphaNext: Record<string, string> = {
    "Christmas: 🎄": "CNY: 🧧",
    "CNY: 🧧": "Halloween: 🎃",
    "Halloween: 🎃": "Thanksgiving: 🦃",
    "Thanksgiving: 🦃": "Valentines: ❤️",
    "Valentines: ❤️": "Christmas: 🎄",
};

const chronoNext: Record<string, string> = {
    "CNY: 🧧": "Valentines: ❤️",
    "Valentines: ❤️": "Halloween: 🎃",
    "Halloween: 🎃": "Thanksgiving: 🦃",
    "Thanksgiving: 🦃": "Christmas: 🎄",
    "Christmas: 🎄": "CNY: 🧧",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("Christmas: 🎄");

    function changeAlpha(): void {
        const newHoliday = alphaNext[holiday];
        setHoliday(newHoliday);
    }

    function changeChrono(): void {
        const newHoliday = chronoNext[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <Button onClick={changeAlpha}>Advance by Alphabet</Button>
            <Button onClick={changeChrono}>Advance by Year</Button>
            <span> Holiday: {holiday} </span>
        </div>
    );
}
