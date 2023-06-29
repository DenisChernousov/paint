import './App.css';
import Navbar from "./Component/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import Header from "./Component/Header/Header";
import Reproduction from "./Component/Reproduction/Reproduction";
import New from "./Component/New/New";
import Team from "./Component/Team/Team";
import Footer from "./Component/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Header/>
                <Reproduction/>
                <New/>
                <Team/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
