import React, { useState, useEffect, useContext } from 'react';
import { ColorContext } from '../../contexts/color-context/color-context';
import styled from 'styled-components';

const ColorPalettesArea = styled.section``;

export default function ColorPalettes() {
    const colorCTX = useContext(ColorContext);
    const [colorSchemes, setColorSchemes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getColorScheme = async (config) => {
            const URL = `https://www.thecolorapi.com/scheme?hex=${config.colorCode}&format=${config.format}&mode=${config.mode}&count=${config.count}`;
            try {
                const response = await fetch(URL);
                if(!response.ok) throw new Error(`${response.status} - ${response.statusText}`)
                const data = await response.json();
                return data;
            } catch(error) {
                return error;
            }
        };

        Promise.all([
            getColorScheme({ colorCode: colorCTX.colorCode, mode: 'monochrome', count: '10', format: 'json' }),
            getColorScheme({ colorCode: colorCTX.colorCode, mode: 'monochrome-dark', count: '10', format: 'json' }),
            getColorScheme({ colorCode: colorCTX.colorCode, mode: 'monochrome-light', count: '10', format: 'json' }),
            getColorScheme({ colorCode: colorCTX.colorCode, mode: 'analogic', count: '10', format: 'json' }),
            getColorScheme({ colorCode: colorCTX.colorCode, mode: 'complement', count: '2', format: 'json' }),
            getColorScheme({ colorCode: colorCTX.colorCode, mode: 'triad', count: '3', format: 'json' }),
            getColorScheme({ colorCode: colorCTX.colorCode, mode: 'quad', count: '4', format: 'json' })
        ])
            .then(schemes => setColorSchemes(schemes))
            .catch(error => setError(error))
            .finally(() => console.log('finished the requests'));
    }, [colorCTX.colorCode]);

    console.log(colorSchemes);

    if (colorCTX.isLoading) return <div>Loading...................</div>

    return (
        <ColorPalettesArea>
            {
                colorSchemes.map(scheme => {
                    return(<div>
                        <h1>{scheme.mode}</h1>
                        <div seed={scheme.seed}>
                            {scheme.colors.map(color => {
                                return <span key={color.hex.clean} style={{display: 'inline-block', backgroundColor: color.hex.value, color: color.contrast.value, width: '60px', height: '60px'}}>{color.hex.clean}</span>
                            })}
                        </div>
                    </div>)
                })
            }
        </ColorPalettesArea>
    );
};

/*
                            As requisições para color schemes dependem de um config obj que precisa ter as informaçoes:
                            {
                                colorCode: '',
                                mode: '',
                                count: '',
                                format: 'json'
                            }

                            modes:
                            monchrome: 10,
                            monochrome-dark: 10,
                            monochrome-light: 10,
                            analogic: 3,
                            complement: 2,
                            triad: 3,
                            quad: 4
                        */

/*

*/