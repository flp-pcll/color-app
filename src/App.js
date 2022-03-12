import React from "react";
import ColorDisplay from "./components/ColorDisplay/ColorDisplay";
import ColorMainInfo from "./components/ColorDisplay/ColorMainInfo";
import ColorPalettes from "./components/ColorPalettes/ColorPalettes";
import ColorSearch from "./components/ColorSearch/ColorSearch";
import ConversionTable from "./components/ConversionTable/ConversionTable";
import RandomColorGenerator from "./components/RandomColorGenerator/RandomColorGenerator";
import RandomColorPalette from "./components/RandomColorPalette/RandomColorPalette";
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
                        <RandomColorGenerator />
                        <ColorSearch />
                    </section>

                    <ColorDisplay>
                        <header>
                            {/* <ColorMainInfo /> */}
                        </header>
                        {/* <ConversionTable />*/}
                    </ColorDisplay>

                    <ColorPalettes />
                </ColorProvider>
            </main>
            <footer>
            </footer>
        </React.Fragment>
    );
};