import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext(null);

const DEFAULT_SETTINGS = {
    theme: "light",
    language: "uk",
    fontSize: "medium",
};

export const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem("settings");
        return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
    });

    useEffect(() => {
        localStorage.setItem("settings", JSON.stringify(settings));
    }, [settings]);

    const toggleTheme = () => {
        setSettings((prev) => ({
            ...prev,
            theme: prev.theme === "light" ? "dark" : "light",
        }));
    };

    const changeLanguage = (lang) => {
        setSettings((prev) => ({ ...prev, language: lang }));
    };

    const changeFontSize = (size) => {
        setSettings((prev) => ({ ...prev, fontSize: size }));
    };

    const resetSettings = () => {
        setSettings(DEFAULT_SETTINGS);
        localStorage.removeItem("settings");
    };

    return (
        <SettingsContext.Provider
            value={{
                ...settings,
                toggleTheme,
                changeLanguage,
                changeFontSize,
                resetSettings,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error("useSettings must be used within SettingsProvider");
    }
    return context;
};
