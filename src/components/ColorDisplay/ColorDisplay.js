import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ColorContext } from "../../contexts/color-context/color-context";

const ColorArea = styled.div`
background-color: ${props => '#' + props.bg};
width: 400px;
height: 250px;
border: 1px solid black;
`;


export default function ColorDisplay() {
    const colorCTX = useContext(ColorContext);
    console.log('on color display:', colorCTX);

    useEffect(() => {
        const getColorInfo = async url => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data, 'bilubilubilu');

                const scheme = await fetch(`https://www.thecolorapi.com/scheme?hex=${colorCTX.colorCode}&format=json&count=10`);
                
                const schemeData = await scheme.json();
                const { _links: { schemes } } = schemeData;
                console.log('alocaaaaa', Object.entries(schemes));

            } catch (error) {
                console.log(error);
            }
        };

        getColorInfo(`https://www.thecolorapi.com/id?hex=${colorCTX.colorCode}&format=json`);
    }, [colorCTX.colorCode]);


    return (
        <ColorArea bg={colorCTX.colorCode}>
        </ColorArea>
    );
};