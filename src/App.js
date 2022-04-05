import Navbar from './Components/Navbar'
import Download from './Components/Download'
import Collection from "./Components/Collection";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";

function App() {

    return (
        <div>
            <Navbar/>
            <Routes path="/m-downloader-front">
                <Route path="/" index element={<Download />} />
                <Route path="/collection" element={<Collection />} />
            </Routes>
        </div>
    );
}

export default App;
