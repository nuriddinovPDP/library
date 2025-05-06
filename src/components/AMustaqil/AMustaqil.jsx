import React, { useContext, useEffect, useState } from 'react';
import { API } from '../../utils/config';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext/SearchContext';

const AMustaqil = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        API.get('/author/genreId/3')
            .then((response) => {
                const authors = response.data.map((author) => ({
                    ...author
                }));
                setAuthors(authors);
            });
    }, []);
    const { value, setValue } = useContext(SearchContext);
    const filterArray = authors.filter((el) =>
        (el.first_name + el.last_name).toLowerCase().includes(value)
    );
    console.log(filterArray);
    const data = value ? filterArray : authors;

    return (
        <div className="flex justify-center items-center min-h-screen p-4 sm:p-7">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-8">
                {data.map((author) => (
                    <li
                        className="w-full max-w-[165px] mx-auto shadow-lg rounded-lg text-center text-white"
                        key={author.id}
                    >
                        <Link to={`/author/${author.id}`}>
                            <img
                                src={`https://books-backend-production-6f61.up.railway.app/${author.image}`}
                                alt={`${author.first_name} ${author.last_name}`}
                                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg mb-3"
                            />
                            <div className="p-2">
                                <h2 className="text-sm sm:text-md font-bold text-[#C9AC8C]">
                                    {author.first_name} {author.last_name}
                                </h2>
                                <p className="text-xs sm:text-sm text-[#ccc]">
                                    {author.date_of_birth} - {author.date_of_death}
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AMustaqil;
