import { useSettings } from "../context/SettingsContext";

const Main = () => {
    const { theme, language, fontSize, changeFontSize, resetSettings } =
        useSettings();

    return (
        <main className={`main ${theme} ${fontSize}`}>
            <h2>Current settings</h2>

            <p>Theme: {theme}</p>
            <p>Language: {language}</p>
            <p>Font size: {fontSize}</p>

            <select
                value={fontSize}
                onChange={(e) => changeFontSize(e.target.value)}
            >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>

            <br />
            <button onClick={resetSettings}>
                Скинути налаштування
            </button>
        </main>
    );
};

export default Main;
