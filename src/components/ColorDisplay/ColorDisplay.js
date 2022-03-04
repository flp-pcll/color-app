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

    return (
        <React.Fragment>
            <ColorArea bg={colorCTX?.colorInfo?.seed?.hex?.value} textColor={colorCTX?.colorInfo?.seed?.contrast?.value}>
                <article>
                    <h3>{colorCTX?.colorInfo?.seed?.hex?.value}</h3>
                    <p>{colorCTX?.colorInfo?.seed?.name?.value}</p>
                </article>
            </ColorArea>
        </React.Fragment>
    );
};