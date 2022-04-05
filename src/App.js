import Navbar from './Components/Navbar'
import Download from './Components/Download'
import Collection from "./Components/Collection";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";

function App() {

    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Download />} />
                <Route path="/collection" element={<Collection />} />
            </Routes>
        </div>
    );
}

export default App;
