import { NavLink } from "react-router-dom";

function AHeader() {
    return (<header className="bg-white">
        <div className="container mx-auto px-4 flex justify-center items-center h-16">
            <nav className="flex space-x-6">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `text-gray-600 ${isActive ? "text-blue-950 font-extrabold" : ""
                        }`
                    }
                >
                    Back To Home
                </NavLink>
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        `text-gray-600 ${isActive ? "text-blue-950 font-extrabold" : ""
                        }`
                    }
                >
                    My account
                </NavLink>
                <NavLink
                    to="/security"
                    className={({ isActive }) =>
                        `text-gray-600 ${isActive ? "text-blue-950 font-extrabold" : ""
                        }`
                    }
                >
                    Security
                </NavLink>
                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        `text-gray-600 ${isActive ? "text-blue-950 font-extrabold" : ""
                        }`
                    }
                >
                    Settings
                </NavLink>
            </nav>
        </div>
    </header>

    )
}

export default AHeader