import React, { useRef, useContext } from "react";
import { ColorContext } from "../../contexts/color-context/color-context";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";


export default function ColorSearch() {
    const inputRef = useRef(null);
    const colorCTX = useContext(ColorContext);

    const setColorCodeToSearchHandler = () => colorCTX.setColorHexCode(inputRef.current.value);

    return (
        <div>
            <h2>Color Search</h2>
            <p>Search for colors</p>
            <form>
                <fieldset>
                    <Input ref={inputRef} type="text" aria-label="Search for colors" placeholder="Example: FF00FF"></Input>
                </fieldset>
                <fieldset>
                    <Button onClick={setColorCodeToSearchHandler} type="button">Search</Button>
                </fieldset>
            </form>
        </div>
    );
};