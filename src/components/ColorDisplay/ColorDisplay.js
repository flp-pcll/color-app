import React, { useContext } from "react";
import { useHttp } from "../../hooks/useHttp";
import { ColorContext } from "../../contexts/color-context/color-context";
import ColorMainInfo from "./ColorMainInfo";
import ConversionTable from "../ConversionTable/ConversionTable";
import styled from "styled-components";

// https://www.thecolorapi.com/id?hex=000000&format=json

const ColorDisplayArea = styled.section``;

export default function ColorDisplay({ children }) {
    const colorCTX = useContext(ColorContext);
    const { data: colorInfo, isLoading: loading, error } = useHttp({ url: `https://www.thecolorapi.com/id?hex=${colorCTX.targetColor}&format=json` });

    console.log(loading, error);

    if (loading) return <div>Loading...</div>

    return (
        <React.Fragment>
            {!loading && (
                <ColorDisplayArea>
                    <div>Ihuuuu</div>
                    <ColorMainInfo colorInfo={colorInfo} />
                    <ConversionTable colorInfo={colorInfo} />
                </ColorDisplayArea>
            )}
        </React.Fragment>
    )
};