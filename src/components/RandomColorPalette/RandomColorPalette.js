import { useContext, useEffect } from "react";
import { ColorContext } from "../../contexts/color-context/color-context";

export default function RandomColorPalette() {
    const colorCTX = useContext(ColorContext);
    console.log(colorCTX);

    useEffect(() => {
        const generateRandomPalette = async () => {
            let targetColor = [colorCTX.colorSeed.rgb.r, colorCTX.colorSeed.rgb.g, colorCTX.colorSeed.rgb.b];
            const url = "http://colormind.io/api/";
            let myHeaders = new Headers();
            var data = {
                model: "default",
                input: [targetColor]
            }

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: myHeaders,
                    body: JSON.stringify(data)
                });
                if (!response.ok) console.log(response.status, response.statusText)
                const scheme = await response.json();
                console.log(scheme, response.ok, response.status);
            } catch (error) {
                console.log(error);
            }
        };

        generateRandomPalette('')
    }, [colorCTX]);

    if (colorCTX.isLoading) return <div>Loading Random color pallette</div>



    return <div>teste</div>
};