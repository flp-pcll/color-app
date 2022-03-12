import React from "react";
import ColorDisplay from "./components/ColorDisplay/ColorDisplay";
import ColorPalettes from "./components/ColorPalettes/ColorPalettes";
import ColorSearch from "./components/ColorSearch/ColorSearch";
import ControlsFlex from "./components/Layout/ControlsFlex";
import RandomColorGenerator from "./components/RandomColorGenerator/RandomColorGenerator";
import ColorProvider from "./contexts/color-context/colorProvider";

import { GlobalStyle } from "./styles/GlobalStyle";

export default function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <header>
            </header>
            <main>
                <ColorProvider>
                    <section title="controls">
                        <ControlsFlex>
                            <RandomColorGenerator />
                            <ColorSearch />
                        </ControlsFlex>
                    </section>

                    <ColorDisplay>
                    
                    </ColorDisplay>
                    <ColorPalettes />
                </ColorProvider>
            </main>
            <footer>
            </footer>
        </React.Fragment>
    );
};