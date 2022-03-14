import React from "react";
import styled from "styled-components";

const SingleColor = styled.div`
    background-color: ${props => props.bg};
    color: ${props => props.textColor};
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
    const getColorContrast = (hexCode) => {
        const r = parseInt(hexCode.substr(0, 2), 16);
        const g = parseInt(hexCode.substr(2, 2), 16);
        const b = parseInt(hexCode.substr(4, 2), 16);
        const ratio = ((r*299) + (g*587) + (b*114)) / 1000;
        return (ratio >= 128) ? 'black' : 'white';
    };

    const colorCodeContrast = getColorContrast(colorCode.split('#').join(''));

    return (
        <SingleColor bg={colorCode} textColor={colorCodeContrast}>
            <span>{colorCode.split('#')}</span>
        </SingleColor>
    );
};