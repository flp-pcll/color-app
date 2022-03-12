import React from "react";
import styled from "styled-components";

const ColorConversionTable = styled.table`
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    font-weight: 500;

    & caption {
        font-size: 2rem;
        font-weight: 800;
    }
`;
const ColorConversionTableRow = styled.tr`
text-align: center;
background-color: ${props => props.isgray ? '#d8d8da' : '#fff'};

    & td {
        padding: .5rem;
    }
`;

function ConversionTable({ colorInfo }) {
    return (
        <ColorConversionTable>
            <caption>Conversion</caption>
            <tbody>
                <ColorConversionTableRow isgray={true}>
                    <td>HEX</td>
                    <td>
                        {colorInfo.hex.clean}
                    </td>
                </ColorConversionTableRow>
                <ColorConversionTableRow>
                    <td>RGB</td>
                    <td>{`${colorInfo.rgb.r}, ${colorInfo.rgb.g}, ${colorInfo.rgb.b}`}</td>
                </ColorConversionTableRow>
                <ColorConversionTableRow isgray={true}>
                    <td>CMYK</td>
                    <td>{`${colorInfo.cmyk.c}, ${colorInfo.cmyk.m}, ${colorInfo.cmyk.y}, ${colorInfo.cmyk.k}`}</td>
                </ColorConversionTableRow>
                <ColorConversionTableRow>
                    <td>HSL</td>
                    <td>{`${colorInfo.hsl.h}, ${colorInfo.hsl.s}, ${colorInfo.hsl.l}`}</td>
                </ColorConversionTableRow>
                <ColorConversionTableRow isgray={true}>
                    <td>HSV</td>
                    <td>{`${colorInfo.hsv.h}, ${colorInfo.hsv.s}, ${colorInfo.hsv.v}`}</td>
                </ColorConversionTableRow>
                <ColorConversionTableRow>
                    <td>XYZ</td>
                    <td>{`${colorInfo.XYZ.X}, ${colorInfo.XYZ.Y}, ${colorInfo.XYZ.Z}`}</td>
                </ColorConversionTableRow>
            </tbody>
        </ColorConversionTable>
    );
};

export default React.memo(ConversionTable);