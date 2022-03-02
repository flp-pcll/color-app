import React from "react";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

export default function ColorSearch() {
    return (
        <div>
            <h2>Color Search</h2>
            <p>Search for colors</p>
            <form>
                <fieldset>
                    <Input type="text" aria-label="Search for colors" placeholder="Example: FF00FF"></Input>
                </fieldset>
                <fieldset>
                    <Button type="button">Search</Button>
                </fieldset>
            </form>
        </div>
    );
};