import React from "react";

export const ColorContext = React.createContext({
    colorCode: '',
    colorInfo: {},
    error: null,
    setColorCodeToSearch: () => {},
    generateRandomColor: () => {}
});