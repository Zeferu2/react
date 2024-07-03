import About from "./About";
import Home from "./Home";
import {BrowserRouter as Router ,Route, Link, Routes} from "react-router-dom";

function SimpleRouting(){
    return (
        <>
        <Router>
        <nav>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                
            </ul>
        </nav>
        <Routes>
            <Route path ="/Home" Component={Home}/>
            <Route path ="/About" Component={About}/>
        </Routes>
        </Router>
        </>
    )
}

export default SimpleRouting;