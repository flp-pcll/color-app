import React, { useState, useLayoutEffect } from "react";
import { getRandomColorCode } from "../../helpers/getRandomColorCode";
import { ColorContext } from "./color-context";

export default function ColorProvider({ children }) {
    const [targetColor, setTargetColor] = useState('FF00FF');
    // useLayoutEffect(() => setTargetColor(() => getRandomColorCode()), []);

    const updateTargetColor = hexCode => setTargetColor(hexCode);

    const colorContext = {
        targetColor,
        colorInfoURL: `https://www.thecolorapi.com/id?hex=${targetColor}&format=json`,
        updateTargetColor
    };

    console.log(targetColor);

    return (
        <ColorContext.Provider value={colorContext}>
            {children}
        </ColorContext.Provider>
    );
};

