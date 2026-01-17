import { useSettings } from "../context/SettingsContext";

const Header = () => {
    const { theme, language, toggleTheme, changeLanguage } = useSettings();

    return (
        <header>
            <button
                onClick={toggleTheme}
                disabled={theme === "dark"}
            >
                Theme: {theme}
            </button>

            <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
            >
                <option value="uk">UA</option>
                <option value="en">EN</option>
            </select>
        </header>
    );
};

export default Header;
