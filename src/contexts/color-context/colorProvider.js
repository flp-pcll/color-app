import React, { useState, useEffect } from "react";
import { ColorContext } from "./color-context";
import { getRandomColor } from "../../helpers/colorHelpers";

/*
A API, quando a requisição é feita para .../scheme, retorna no objeto de resposta, um par chave valor de nome seed (que é a cor pesquisada com as suas infos);

Fazer 1 requisicao /scheme para receber os objetos: seed e _links.schemes (analogic, analogic-complement, complement, monochrome, monochrome-dark, monochrome-light, quad, triad6)
*/

/*
state = {
    colorCode:,
    colorInfo:,
    colorSchemes:,
}
*/

export default function ColorProvider({ children }) {
    const [randomColor, setRandomColor] = useState(() => getRandomColor());
    const [colorSeed, setColorSeed] = useState({});
    const [colorSchemes, setColorSchemes] = useState({});

    const generateRandomColor = () => setRandomColor(() => getRandomColor());

    useEffect(() => {
        const getColorSeed = async () => {
            const scheme = await fetch(`https://www.thecolorapi.com/scheme?hex=${randomColor}&format=json&count=10`);
            const colorData = await scheme.json();
            const { seed } = colorData;
            const { _links: schemes } = colorData;
            setColorSeed(seed);
            setColorSchemes(schemes);
        };

        getColorSeed();
    }, [randomColor]);

    const colorContext = {
        colorCode: randomColor,
        colorInfo: colorSeed,
        colorSchemes: colorSchemes,
        generateRandomColor
    };

    console.log('colorContext', colorContext);

    return (
        <ColorContext.Provider value={colorContext}>
            {children}
        </ColorContext.Provider>
    );
};
