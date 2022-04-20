import "./App.css";
import useLocalStorage from "use-local-storage";

function App() {

  const [theme, setTheme] = useLocalStorage("theme", "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <button onClick={switchTheme}>
        Switch to {theme === "light" ? "dark" : "light"} Theme
      </button>
    </div>
  );
}

export default App;
