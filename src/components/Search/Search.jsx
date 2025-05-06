import React, { useContext, useRef } from "react";
import { SearchContext } from "../../context/SearchContext/SearchContext";

const Search = () => {
    const inputRef = useRef();
    const { setValue } = useContext(SearchContext);

    return (
        <div className="relative bg-[#191919] text-white w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto -mt-16 p-4 sm:p-6 rounded-2xl">
            <h2 className="text-center text-[#C9AC8C] text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                QIDIRISH
            </h2>
            <div className="flex flex-col sm:flex-row items-center bg-[#2C2C2C] rounded-full px-4 py-2 shadow-md">
                <input
                    type="text"
                    ref={inputRef}
                    placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
                    className="flex-grow bg-transparent text-[#585858] placeholder-[#585858] px-2 mb-3 sm:mb-0 sm:mr-3"
                    onChange={() => setValue(inputRef?.current?.value.toLowerCase())}
                />
                <button
                    type="button"
                    className="bg-[#C9AC8C] text-[#191919] px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-[#b08e74] transition"
                >
                    Izlash
                </button>
            </div>
        </div>
    );
};

export default Search;
