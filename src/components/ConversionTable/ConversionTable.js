import React, { useContext } from "react";
import styled from "styled-components";
import { ColorContext } from "../../contexts/color-context/color-context";

//Neste componente, é necessário desestruturar a resposta para pegar apenas os objetos com informações relativas 
//aos códigos de cores para a tabela de conversao, por exemplo: hsl, rgb, cmyk, etc...

/*
<table>
    <tbody>
        <tr>
            <td></td>
            <td></td>
        </tr>
    
    </tbody>
</table>
*/

const ColorConversionTable = styled.table``;

const ColorConversionTableRow = styled.tr``;

export default function ConversionTable({ colorInfo }) {

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