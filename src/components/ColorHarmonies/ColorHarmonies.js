import React, { useContext } from "react";
import { ColorContext } from "../../contexts/color-context/color-context";
import { Harmonizer } from "color-harmony";
import styled from "styled-components";
import ColorHarmony from "./ColorHarmony";

const ColorHarmoniesArea = styled.section``;


export default function ColorHarmonies() {
    const colorCTX = useContext(ColorContext);
    const harmonizer = new Harmonizer();

    return (
        <ColorHarmoniesArea>
            <ColorHarmony harmonyName={'analogous'}
                harmonyDescription={'Analogous color schemes are made by picking colors that are next to each other on the color wheel'}
                harmonyArray={harmonizer.harmonize(colorCTX.targetColor, 'analogous')}
            />
            <ColorHarmony harmonyName={'complementary'}
                harmonyDescription={'Complementary color schemes are made by picking two opposite colors on the color wheel'}
                harmonyArray={harmonizer.harmonize(colorCTX.targetColor, 'complementary')}
            />
            <ColorHarmony harmonyName={'splitComplementary'}
                harmonyDescription={'Split complementary schemes are like complementary but they use two adjacent colors of the complement'}
                harmonyArray={harmonizer.harmonize(colorCTX.targetColor, 'splitComplementary')}
            />
            <ColorHarmony harmonyName={'triadic'}
                harmonyDescription={'Triadic color schemes are made by picking three colors equally spaced on the color wheel'}
                harmonyArray={harmonizer.harmonize(colorCTX.targetColor, 'triadic')}
            />
            <ColorHarmony harmonyName={'tetradic'}
                harmonyDescription={'Tetradic color schemes are made from two couples of complementary colors in a rectangular shape on the color wheel'}
                harmonyArray={harmonizer.harmonize(colorCTX.targetColor, 'tetradic')}
            />
        </ColorHarmoniesArea>
    );
};
