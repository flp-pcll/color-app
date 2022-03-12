import React, { useContext } from "react";
import { ColorContext } from "../../contexts/color-context/color-context";
import { getRandomColorCode } from "../../helpers/getRandomColorCode";

import styled from "styled-components";
import Button from "../UI/Button";
import Card from "../UI/Card";

const ColorGeneratorArea = styled.div``;

export default function RandomColorGenerator() {
    const colorCTX = useContext(ColorContext);

    const generateRandomColorHandler = () => {
        const hexCode = getRandomColorCode();
        colorCTX.updateTargetColor(hexCode);
    };

    return (
        <Card>
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
        </Card>
    );
};