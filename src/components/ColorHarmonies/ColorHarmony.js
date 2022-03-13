import React from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import ColorHarmonyItem from "./ColorHarmonyItem";
import SingleColorDisplay from "./SingleColorDisplay";

const ColorHarmonyList = styled.ul`
    display: flex;
    flex-grow: 1;
    width: 100%;

    & li {
        flex-grow: 1;

        & div {
            text-transform: uppercase;
        }
    }
`;

export default function ColorHarmony({ harmonyName, harmonyDescription, harmonyArray }) {
    const renderedColorList = harmonyArray.map(color => {
        return (
            <ColorHarmonyItem key={color}>
                <SingleColorDisplay colorCode={color} />
            </ColorHarmonyItem>
        );
    });

    return (
        <article id={harmonyName}>
            <h4>{harmonyName}</h4>
            <p>{harmonyDescription}</p>
            <Card>
                <ColorHarmonyList>
                    {renderedColorList}
                </ColorHarmonyList>
            </Card>
        </article>
    );
};