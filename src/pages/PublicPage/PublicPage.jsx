import React from "react";
import { Link } from "react-router-dom";

export default function PublicPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r bg-gray-800 text-white p-6">
        <nav className="container mx-auto flex justify-between items-center p-6">
          <Link to="/" className="text-2xl font-bold">Public Page</Link>
          <ul className="flex gap-6">
            <li>
              <Link to="/login" className="text-lg">Sign in</Link>
            </li>
            <li>
              <Link to="/register" className="text-lg">Sign up</Link>
            </li>
            <li>
              <Link to="/add-book" className="text-lg">Add books</Link>
            </li>
            <li>
              <Link to="/add-author" className="text-lg">Add authors</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
