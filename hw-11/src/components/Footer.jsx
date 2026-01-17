import { useSettings } from "../context/SettingsContext";

const Footer = () => {
    const { language } = useSettings();

    return (
        <footer>
            Current language: {language.toUpperCase()}
        </footer>
    );
};

export default Footer;
