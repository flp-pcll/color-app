import React, { useContext } from "react";
import { useHttp } from "../../hooks/useHttp";
import { ColorContext } from "../../contexts/color-context/color-context";
import ColorMainInfo from "./ColorMainInfo";
import ConversionTable from "../ConversionTable/ConversionTable";
import styled from "styled-components";
import ColorSchemes from "../ColorSchemes/ColorSchemes";

const ColorDisplayArea = styled.section``;

export default function ColorDisplay({ children }) {
    const colorCTX = useContext(ColorContext);
    const { data: colorInfo, isLoading: loading, error } = useHttp({ url: `https://www.thecolorapi.com/id?hex=${colorCTX.targetColor}&format=json` });

    if (loading) return <div>Loading...</div>

    if (error) return <div>{error}</div>

    return (
        <React.Fragment>
            {!loading && (
                <ColorDisplayArea>
                    <ColorMainInfo colorInfo={colorInfo} />
                    <ConversionTable colorInfo={colorInfo} />
                    <ColorSchemes />
                </ColorDisplayArea>
            )}
        </React.Fragment>
    )
};