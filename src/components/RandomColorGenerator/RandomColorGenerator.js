import React, { useState } from "react";
import { getRandomColor } from "../../helpers/colorHelpers";
import styled from "styled-components";
import { Button } from "../UI/Button";

const ColorGeneratorArea = styled.div``;

export default function RandomColorGenerator() {
    const [randomColor, setRandomColor] = useState(() => getRandomColor());

    const generateRandomColorHandler = () => setRandomColor(() => getRandomColor());

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