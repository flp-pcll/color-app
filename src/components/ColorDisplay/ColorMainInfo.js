import React from "react";
import styled from "styled-components";
import Card from "../UI/Card";

const ColorArea = styled.header`
    background-color: ${props => props.bg};
    color: ${props => props.textColor};
    width: 100%;
    height: 250px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;

        & h4 {
            font-weight: 800;
            font-size: 2rem;
        }

        & h3 {
            font-size: 1.4rem;
            font-weight: 400;
        }
    
`;

function ColorMainInfo({ colorInfo }) {
    console.log('color main info')
    return (
        <Card>
            <ColorArea bg={colorInfo.hex.value} textColor={colorInfo.contrast.value}>
                <h3>{colorInfo.hex.clean}</h3>
                <h4>{colorInfo.name.value}</h4>
            </ColorArea>
        </Card>
    );
};

export default React.memo(ColorMainInfo);