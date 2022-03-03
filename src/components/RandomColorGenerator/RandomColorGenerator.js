import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { ColorContext } from "../../contexts/color-context/color-context";

const ColorGeneratorArea = styled.div``;

export default function RandomColorGenerator() {
    const colorCTX = useContext(ColorContext);

    const generateRandomColorHandler = () => colorCTX.generateRandomColor();

    return (
        <ColorGeneratorArea>
            <h2>Random Color Generator</h2>
            <p>Click on the button to get infos on random colors!</p>
            <Button
                onClick={generateRandomColorHandler}
                type="button"
                title="Random Color Generator">
                Generate!
            </Button>
        </ColorGeneratorArea>
    );
};