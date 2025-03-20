import React, { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState("#077b8a");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{ backgroundColor: color, padding: "20px", margin: "10px 0", borderRadius: "5px" }}>
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="color-input">Select a color:</label>
            <input
                id="color-input"
                type="color"
                value={color}
                onChange={handleColorChange}
                aria-label="Choose a color"
            />
        </div>
    );
}

export default ColorPicker;