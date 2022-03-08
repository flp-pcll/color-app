import React, { useEffect } from "react";
import ColorDisplay from "./components/ColorDisplay/ColorDisplay";
import ColorPalettes from "./components/ColorPalettes/ColorPalettes";
import ColorSearch from "./components/ColorSearch/ColorSearch";
import ConversionTable from "./components/ConversionTable/ConversionTable";
import RandomColorGenerator from "./components/RandomColorGenerator/RandomColorGenerator";
import ColorProvider from "./contexts/color-context/colorProvider";

export default function App() {
    return (
        <div>
            <header>
            </header>
            <main>
                <ColorProvider>
                    <section title="controls">
                        <RandomColorGenerator />
                        <ColorSearch />
                    </section>
                    <section>
                        <ColorDisplay />
                    </section>
                    <section>
                        <ConversionTable />
                    </section>
                    <ColorPalettes>
                    </ColorPalettes>
                </ColorProvider>
            </main>
            <footer>
            </footer>
        </div>
    );
};