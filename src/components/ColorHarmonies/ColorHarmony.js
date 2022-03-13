import React from "react";
import styled from "styled-components";
import ColorHarmonyItem from "./ColorHarmonyItem";

const ColorHarmonyList = styled.ul``;

export default function ColorHarmony({ harmonyName, harmonyDescription, harmonyArray }) {
    console.log(harmonyName, harmonyArray);

    const renderedList = harmonyArray.map(color => {
        return (
            <ColorHarmonyItem key={color}>
                <div style={{ backgroundColor: color, width: '150px', height: '150px' }}>{color.split('#')}</div>
            </ColorHarmonyItem>
        );
    });
    return (
        <article>
            <h4>{harmonyName}</h4>
            <p>{harmonyDescription}</p>
            <ColorHarmonyList>
                {renderedList}
            </ColorHarmonyList>
        </article>
    );
};