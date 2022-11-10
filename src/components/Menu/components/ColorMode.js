import React from "react";

export const ColorModeContext = React.createContext({
    mode: "",
    toggleMode: () => {
        alert("Você precisa me configurar primeiro!");
    },
});

export default function ColorModeProvider(props) {
    const [mode, setMode] = React.useState(props.initialMode);

    function toggleMode() {
        if (mode === "dark") setMode("light");
        if (mode === "light") setMode("dark");
    }

    return (
        // Entender pq ta sendo ignorado?
        <ColorModeContext.Provider
            value={{ mode: mode, toggleMode: toggleMode }}
        >
            {props.children}
        </ColorModeContext.Provider>
    );
}
