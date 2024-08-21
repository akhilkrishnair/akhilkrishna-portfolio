import "./App.css";
import { Navbar,Footer } from "components/index";
import PageRoutes from "routes/PageRoutes";

const  App = () => {
    return (
		<>
		<Navbar/>
		<PageRoutes/>
		<Footer/>
		</>
    );
}

export default App;
