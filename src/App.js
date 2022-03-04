import React from "react";
import ColorDisplay from "./components/ColorDisplay/ColorDisplay";
import ColorSearch from "./components/ColorSearch/ColorSearch";
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
                </ColorProvider>
                {/*                 
                <section>
                    <color></color>
                    <conversionTable></conversionTable>
                    <variations></variations>
                    <colorHarmonies></colorHarmonies>
                </section>
                <section>Scheme</section> */}
            </main>
            <footer>

            </footer>
        </div>
    );
};