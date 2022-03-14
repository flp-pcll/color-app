import React from "react";
import styled from "styled-components";

const SingleColor = styled.div`
    background-color: ${props => props.bg};
    height: 150px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;

    & span {
        font-weight: 500;
        font-size: 1rem;
    }
`;


export default function SingleColorDisplay({ colorCode }) {
    return (
        <SingleColor bg={colorCode}>
            <span>{colorCode.split('#')}</span>
        </SingleColor>
    );
};