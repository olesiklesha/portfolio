import {NavLink, useLocation} from "react-router-dom";

export const Navbar = () => {
    const location = useLocation();

    const getLinkColor = (isActive) => {
        if (isActive) return 'text-blue-500';

        return location.pathname === '/' ? 'text-white' : 'text-black';
    };

    return (
        <header className="header">
            <NavLink to="/"
                     className="w-10 h-10 rounded-lg bg-white items-center flex justify-center font-bold shadow-md">
                <p className="blue-gradient_text">AO</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about"
                         className={({isActive}) => getLinkColor(isActive)}>
                    About
                </NavLink>
                <NavLink to="/projects"
                         className={({isActive}) => getLinkColor(isActive)}>
                    Projects
                </NavLink>
            </nav>
        </header>
    );
};

