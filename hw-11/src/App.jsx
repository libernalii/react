import { SettingsProvider } from "./context/SettingsContext";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.scss"

function App() {
  return (
    <SettingsProvider>
      <Header />
      <Main />
      <Footer />
    </SettingsProvider>
  );
}

export default App;
