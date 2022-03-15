import React from "react";
import ColorDisplay from "./components/ColorDisplay/ColorDisplay";
import ColorSearch from "./components/ColorSearch/ColorSearch";
import RandomColorGenerator from "./components/RandomColorGenerator/RandomColorGenerator";
import ColorProvider from "./contexts/color-context/colorProvider";

import { GlobalStyle } from "./styles/GlobalStyle";

export default function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <ColorProvider>
                <header>
                </header>
                <main>
                    <section title="controls">
                        <RandomColorGenerator />
                        <ColorSearch />
                    </section>

                    <ColorDisplay></ColorDisplay>
                </main>
            </ColorProvider>
            <footer>
            </footer>
        </React.Fragment >
    );
};