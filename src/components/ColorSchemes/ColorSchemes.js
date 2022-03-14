import React, { useContext } from "react";
import { ColorContext } from "../../contexts/color-context/color-context";
import { Harmonizer } from "color-harmony";
import styled from "styled-components";
import ColorScheme from "./ColorScheme";

const ColorSchemesArea = styled.section``;


export default function ColorSchemes() {
    const colorCTX = useContext(ColorContext);
    const harmonizer = new Harmonizer();

    return (
        <ColorSchemesArea>
            <ColorScheme harmonyName={'shades'}
                harmonyDescription={'teste'}
                harmonyArray={harmonizer.shades(colorCTX.targetColor)}
            />
            <ColorScheme harmonyName={'tints'}
                harmonyDescription={'teste'}
                harmonyArray={harmonizer.tints(colorCTX.targetColor)}
            />
            <ColorScheme harmonyName={'tones'}
                harmonyDescription={'teste'}
                harmonyArray={harmonizer.tones(colorCTX.targetColor)}
            />
            <ColorScheme harmonyName={'analogous'}
                harmonyDescription={'Analogous color schemes are made by picking colors that are next to each other on the color wheel'}
                harmonyArray={harmonizer.harmonize(colorCTX.targetColor, 'analogous')}
            />
            <ColorScheme harmonyName={'complementary'}
                harmonyDescription={'Complementary color schemes are made by picking two opposite colors on the color wheel'}
                harmonyArray={harmonizer.harmonize(colorCTX.targetColor, 'complementary')}
            />
            <ColorScheme harmonyName={'splitComplementary'}
                harmonyDescription={'Split complementary schemes are like complementary but they use two adjacent colors of the complement'}
                harmonyArray={harmonizer.harmonize(colorCTX.targetColor, 'splitComplementary')}
            />
            <ColorScheme harmonyName={'triadic'}
                harmonyDescription={'Triadic color schemes are made by picking three colors equally spaced on the color wheel'}
                harmonyArray={harmonizer.harmonize(colorCTX.targetColor, 'triadic')}
            />
            <ColorScheme harmonyName={'tetradic'}
                harmonyDescription={'Tetradic color schemes are made from two couples of complementary colors in a rectangular shape on the color wheel'}
                harmonyArray={harmonizer.harmonize(colorCTX.targetColor, 'tetradic')}
            />
        </ColorSchemesArea>
    );
};
