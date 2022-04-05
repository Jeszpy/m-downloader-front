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
                <Route path="/m-downloader-front" index element={<Download />} />
                <Route path="/m-downloader-front/collection" element={<Collection />} />
            </Routes>
        </div>
    );
}

export default App;
