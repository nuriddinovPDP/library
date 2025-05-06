import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import img from "../../assets/odam.svg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-[#191919] text-white px-6 md:px-16 py-4 flex items-center justify-between border-b border-[#303030] relative">
            <Link to="/" className="text-2xl font-semibold text-[#C9AC8C]">
                Badiiyat
            </Link>

            <nav
                className={`${isMenuOpen ? "flex" : "hidden"
                    } md:flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-4 md:space-x-8 text-sm absolute md:relative top-full left-0 w-full md:w-auto bg-[#191919] p-4 md:p-0 z-50`}
            >
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-[#c9ac8c]" : "text-white"
                    }
                >
                    Books
                </NavLink>
                <NavLink
                    to="/authors"
                    className={({ isActive }) =>
                        isActive ? "text-[#c9ac8c]" : "text-white"
                    }
                >
                    Authors
                </NavLink>
                <NavLink
                    to="/add-book"
                    className={({ isActive }) =>
                        isActive ? "text-[#c9ac8c]" : "text-white"
                    }
                >
                    Add books
                </NavLink>
                <NavLink
                    to="/add-author"
                    className={({ isActive }) =>
                        isActive ? "text-[#c9ac8c]" : "text-white"
                    }
                >
                    Add authors
                </NavLink>
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        isActive ? "text-[#c9ac8c]" : "text-white"
                    }
                >
                    Profile
                </NavLink>
            </nav>

            <div className="flex items-center space-x-4">
                <img
                    src={img}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover"
                />
                <button
                    className="text-white py-1 rounded-md flex items-center space-x-2 md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={
                                isMenuOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
    