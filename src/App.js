import React, { useState } from "react";
import ColorDisplay from "./components/ColorDisplay/ColorDisplay";
import ColorSearch from "./components/ColorSearch/ColorSearch";
import ConversionTable from "./components/ConversionTable/ConversionTable";
import RandomColorGenerator from "./components/RandomColorGenerator/RandomColorGenerator";
import ColorProvider from "./contexts/color-context/colorProvider";
import { getRandomColor } from "./helpers/colorHelpers";

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
                        {/*conversion table*/}
                        <ConversionTable />
                    </section>
                </ColorProvider>
            </main>
            <footer>

            </footer>
        </div>
    );
};