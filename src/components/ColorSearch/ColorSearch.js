import React, { useRef, useContext, useState } from "react";
import { ColorContext } from "../../contexts/color-context/color-context";
import { validateHexadecimalCode } from "../../helpers/validateHexadecimalCode";
import styled from "styled-components";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Card from "../UI/Card";

const ColorSearchForm = styled.form`
display: flex;
`;

const FormControls = styled.div`
    display: flex;
    /* flex-direction: column; */
`;

export default function ColorSearch() {
    const [error, setError] = useState(false);
    const inputRef = useRef(null);
    const colorCTX = useContext(ColorContext);

    const setColorCodeToSearchHandler = () => {
        const codeIsValid = validateHexadecimalCode(inputRef.current.value);
        if (codeIsValid) {
            colorCTX.updateTargetColor(inputRef.current.value);
        } else {
            setError(true);
        };
    };

    return (
        <Card>
            <ColorSearchForm action="/" method="/" noValidate autoComplete="off" id="colorSearch">
                <FormControls>
                    <label htmlFor="hexColorInput">Search for colors</label>
                    <Input id="hexColorInput"
                        onFocus={() => setError(false)}
                        hasError={error}
                        ref={inputRef}
                        type="text"
                        aria-label="Search for colors"
                        placeholder="Example: FF00FF"
                    />
                    {error && <label htmlFor="hexColorInput">Please enter a valid hexadecimal code. Ex: FF00FF</label>}
                </FormControls>
                <React.Fragment>
                    <Button onClick={setColorCodeToSearchHandler}
                        type="button">
                        Search
                    </Button>
                </React.Fragment>
            </ColorSearchForm>
        </Card>
    );
};