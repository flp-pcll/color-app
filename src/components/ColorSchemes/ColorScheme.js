import React from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import ColorSchemeItem from "./ColorSchemeItem";
import SingleColorDisplay from "./SingleColorDisplay";

const ColorSchemeList = styled.ul`
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
            <ColorSchemeItem key={color}>
                <SingleColorDisplay colorCode={color} />
            </ColorSchemeItem>
        );
    });

    return (
        <article id={harmonyName}>
            <h4>{harmonyName}</h4>
            <p>{harmonyDescription}</p>
            <Card>
                <ColorSchemeList>
                    {renderedColorList}
                </ColorSchemeList>
            </Card>
        </article>
    );
};