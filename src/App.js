import React from "react";
import ColorSearch from "./components/ColorSearch/ColorSearch";
import RandomColorGenerator from "./components/RandomColorGenerator/RandomColorGenerator";

export default function App() {
    return (
        <div>
            <header>

            </header>
            <main>
                <section title="controls">
                    <RandomColorGenerator />
                    <ColorSearch />
                </section>
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