import React, { useContext } from "react";
import styled from "styled-components";
import { ColorContext } from "../../contexts/color-context/color-context";

const ColorArea = styled.div`
background-color: ${props => props.bg};
color: ${props => props.textColor};
width: 400px;
height: 250px;
border: 1px solid black;
`;

export default function ColorDisplay() {
    const colorCTX = useContext(ColorContext);

    if(!colorCTX.colorSeed || colorCTX.isLoading) {
        return <div>Loading...</div>
    };

    return (
        <React.Fragment>
            <ColorArea bg={colorCTX?.colorSeed?.hex?.value} textColor={colorCTX?.colorSeed?.contrast?.value}>
                <article>
                    <h3>{colorCTX?.colorSeed?.hex?.value.split('#')}</h3>
                    <p>{colorCTX?.colorSeed?.name?.value}</p>
                </article>
            </ColorArea>
        </React.Fragment>
    );
};