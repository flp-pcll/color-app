import React from "react";
import styled from "styled-components";

const ColorConversionTable = styled.table``;

const ColorConversionTableRow = styled.tr``;

function ConversionTable({ colorInfo }) {
    console.log('conversion table');

    return (
        <React.Fragment>
            <h2>Conversion</h2>
            <ColorConversionTable>
                <tbody>
                    <ColorConversionTableRow>
                        <td>HEX</td>
                        <td>{colorInfo.hex.value}</td>
                    </ColorConversionTableRow>
                    <ColorConversionTableRow>
                        <td>RGB</td>
                        <td>{colorInfo.rgb.value}</td>
                    </ColorConversionTableRow>
                    <ColorConversionTableRow>
                        <td>CMYK</td>
                        <td>{colorInfo.cmyk.value}</td>
                    </ColorConversionTableRow>
                    <ColorConversionTableRow>
                        <td>HSL</td>
                        <td>{colorInfo.hsl.value}</td>
                    </ColorConversionTableRow>
                    <ColorConversionTableRow>
                        <td>HSV</td>
                        <td>{colorInfo.hsv.value}</td>
                    </ColorConversionTableRow>
                    <ColorConversionTableRow>
                        <td>XYZ</td>
                        <td>{colorInfo.XYZ.value}</td>
                    </ColorConversionTableRow>
                </tbody>
            </ColorConversionTable>
        </React.Fragment>
    );
};

export default React.memo(ConversionTable);