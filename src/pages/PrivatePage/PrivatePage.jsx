import React from 'react';
import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';
import Search from '../../components/Search/Search';
import { NavLink, Outlet } from 'react-router-dom';

function PrivatePage() {
  return (
    <div>
      <Header />
      <Carousel />
      <Search />
      <h2 className="text-center text-[#C9AC8C] text-2xl font-bold my-4">
        Asosiy kategoriyalar
      </h2>
      <ul className="flex flex-col sm:flex-row gap-4 sm:gap-20 text-[#898989] justify-center items-center">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#c9ac8c]" : "")}
            to="/temur"
          >
            Temuriylar davri
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#c9ac8c]" : "")}
            to="/jadid"
          >
            Jadid adabiyoti
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#c9ac8c]" : "")}
            to="/sovet"
          >
            Sovet davri
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#c9ac8c]" : "")}
            to="/mustaqil"
          >
            Mustaqillik davri
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default PrivatePage;
