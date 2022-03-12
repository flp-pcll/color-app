import React from "react";
import styled from "styled-components";

const ColorArea = styled.div`
background-color: ${props => props.bg};
color: ${props => props.textColor};
width: 400px;
height: 250px;
border: 1px solid black;
`;

export default function ColorDisplay({ colorInfo }) {
    return (
        <React.Fragment>
            <ColorArea bg={colorInfo.hex.value} textColor={colorInfo.contrast.value}>
                <article>
                    <h3>{colorInfo.name.value}</h3>
                    <p>{colorInfo.hex.clean}</p>
                </article>
            </ColorArea>
        </React.Fragment>
    );
};