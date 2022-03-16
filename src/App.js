import React from "react";
import ColorDisplay from "./components/ColorDisplay/ColorDisplay";
import ColorControls from "./components/ColorControls/ColorControls";
import ColorProvider from "./contexts/color-context/colorProvider";

import { GlobalStyle } from "./styles/GlobalStyle";

export default function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <header>
                <div name="Logo Area"></div>
                <div user-controls>
                    <a>Login</a>
                    <button>Sign Up</button>
                </div>
            </header>
            <ColorProvider>
                <main>
                    <ColorControls />
                    <ColorDisplay />
                </main>
            </ColorProvider>
            <footer></footer>
        </React.Fragment >
    );
};