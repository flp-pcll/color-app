import React, { useState } from "react";
import styled from "styled-components";
import ColorSearch from "../ColorSearch/ColorSearch";
import RandomColorGenerator from "../RandomColorGenerator/RandomColorGenerator";

const ColorControlsSection = styled.section``;


export default function ColorControls() {

    return (
        <ColorControlsSection>
            <RandomColorGenerator />
            <ColorSearch />
        </ColorControlsSection>
    );
};