import React, { useRef, useContext, useState } from "react";
import { ColorContext } from "../../contexts/color-context/color-context";
import { validateHexadecimalCode } from "../../helpers/colorHelpers";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

//O componente controla as mensagens de erro de input, que por enquanto só aceita hexadecimais;
export default function ColorSearch() {
    const [error, setError] = useState(false);
    const inputRef = useRef(null);
    const colorCTX = useContext(ColorContext);

    const setColorCodeToSearchHandler = () => {
        const codeIsValid = validateHexadecimalCode(inputRef.current.value);
        if (codeIsValid) {
            colorCTX.setColorHexCode(inputRef.current.value);
        } else {
            setError(true);
        };
    };

    return (
        <div>
            <h2>Color Search</h2>
            <p>Search for colors</p>
            <form>
                <fieldset>
                    <Input onFocus={() => setError(false)}
                        hasError={error}
                        ref={inputRef}
                        type="text"
                        aria-label="Search for colors"
                        placeholder="Example: FF00FF"
                    />
                    <small style={{display: `${error ? 'block' : 'none'}`}}>Please enter a valid hexadecimal code. Ex: FF00FF</small>
                </fieldset>
                <fieldset>
                    <Button onClick={setColorCodeToSearchHandler}
                        type="button">
                        Search
                    </Button>
                </fieldset>
            </form>
        </div>
    );
};