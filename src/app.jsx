import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/index.js";
import './index.css';
import {About, Contacts, Home, Projects} from "./pages/index.js";

export const App = () => {
    return (
        <main className="bg-slate-300/20 min-h-[100vh]">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contacts/>}/>
                </Routes>
            </BrowserRouter>
        </main>
    );
};
