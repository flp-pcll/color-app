import React from "react";

/*
{
    colorCode: '',
    colorInfo: {}, seed
    colorSchemes: [] _link: schemes
}
*/

export const ColorContext = React.createContext({
    colorCode: '',
    generateRandomColor: () => {}
});