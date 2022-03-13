import React, { useContext } from 'react';
import { useHttp } from '../../hooks/useHttp';
import { ColorContext } from '../../contexts/color-context/color-context';
import styled from 'styled-components';

const ColorPalettesArea = styled.section``;

export default function ColorPalettes() {
    const colorCTX = useContext(ColorContext);
    const { data: colorSchemes, isLoading, error } = useHttp({ url: `https://www.thecolorapi.com/scheme?hex=${colorCTX.targetColor}&format=json&mode=analogic&count=10` });

    return (
        <div>aloca</div>
        //     <ColorPalettesArea>
        //         {isLoading && <div>Loading Color Palettes</div>}
        //         {
        //             !error && !isLoading && colorSchemes.map(scheme => {
        //                 return (
        //                     <div key={(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}>
        //                         <h1>{scheme.mode}</h1>
        //                         <div seed={scheme.seed}>
        //                             {scheme.colors.map(color => {
        //                                 return <span key={color.hex.clean} style={{ display: 'inline-block', backgroundColor: color.hex.value, color: color.contrast.value, width: '60px', height: '60px' }}>{color.hex.clean}</span>
        //                             })}
        //                         </div>
        //                     </div>)
        //             })
        //         }
        //     </ColorPalettesArea>
        // 
    );
};
