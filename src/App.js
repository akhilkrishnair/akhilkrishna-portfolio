import "./App.css";
import { Navbar,Footer } from "components/index";
import { useState } from "react";
import PageRoutes from "routes/PageRoutes";

const  App = () => {
	const [darkMode, setDarkMode] = useState(false);
    return (
		<>
		<Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
		<PageRoutes/>
		<Footer darkMode={darkMode}/>
		</>
    );
}

export default App;
