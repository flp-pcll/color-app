import React, { useState, useEffect } from "react";
import { ColorContext } from "./color-context";
import { getRandomColor } from "../../helpers/colorHelpers";

export default function ColorProvider({ children }) {
    const [colorCode, setColorCode] = useState(() => getRandomColor());
    const [colorSeed, setColorSeed] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const setColorHexCode = hexCode => {
        setColorCode(hexCode);
        setIsLoading(true);
    };

    useEffect(() => {
        const getColorInfo = async () => {
            try {
                const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${colorCode}&format=json&count=10`);
                if (!response.ok) throw new Error(`${response.status} - ${response.statusText}`)
                const data = await response.json();
                setColorSeed(data.seed);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            };
        };

        getColorInfo();
    }, [colorCode]);

    const colorContext = {
        colorCode,
        colorSeed,
        isLoading,
        setColorHexCode
    };

    return (
        <ColorContext.Provider value={colorContext}>
            {children}
        </ColorContext.Provider>
    );
};

