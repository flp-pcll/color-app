import React, { useContext } from "react";
import { useHttp } from "../../hooks/useHttp";
import { ColorContext } from "../../contexts/color-context/color-context";
import styled from "styled-components";

// https://www.thecolorapi.com/id?hex=000000&format=json

const ColorDisplayArea = styled.section``;

export default function ColorDisplay({ children }) {
    const colorCTX = useContext(ColorContext);
    const { data: colorInfo, isLoading, error } = useHttp({ url: `https://www.thecolorapi.com/id?hex=${colorCTX.targetColor}&format=json` });

    console.log(colorCTX.targetColor);
    // console.log(colorInfo);
    return (
        <ColorDisplayArea>
            <div>Color Display Area</div>
            {children}
        </ColorDisplayArea>
    )
};