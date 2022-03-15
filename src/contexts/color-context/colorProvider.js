import React, { useState } from "react";
import { getRandomColorCode } from "../../helpers/getRandomColorCode";
import { ColorContext } from "./color-context";

export default function ColorProvider({ children }) {
    const [targetColor, setTargetColor] = useState(() => getRandomColorCode());

    const updateTargetColor = hexCode => setTargetColor(hexCode);

    const colorContext = {
        targetColor,
        updateTargetColor
    };

    console.log(targetColor);

    return (
        <ColorContext.Provider value={colorContext}>
            {children}
        </ColorContext.Provider>
    );
};

