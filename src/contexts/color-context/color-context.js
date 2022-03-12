import React from "react";

export const ColorContext = React.createContext({
    targetColor: '',
    updateTargetColor: () => {}
});