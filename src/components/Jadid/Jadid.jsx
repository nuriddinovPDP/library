import React, { useContext, useEffect, useState } from 'react';
import { API } from '../../utils/config';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext/SearchContext';

const Temur = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.get('/book/genreId/2').then((response) => {
      const books = response.data.map((book) => ({
        ...book,
      }));
      setBooks(books);
    });
  }, []);

  const { value } = useContext(SearchContext);
  const filterArray = books?.filter((el) =>
    el.title.toLowerCase().includes(value)
  );
  const data = value ? filterArray : books;

  return (
    <div className="flex justify-center items-center min-h-screen p-4 sm:p-7">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-8">
        {data?.map((book) => (
          <li
            className="w-full max-w-[165px] mx-auto text-white"
            key={book.id}
          >
            <Link to={`/book/${book.id}`}>
              <img
                src={`https://books-backend-production-6f61.up.railway.app/${book.image}`}
                alt={book.title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg mb-3"
              />
              <h2 className="text-sm sm:text-md font-bold text-[#C9AC8C]">
                {book.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#ccc]">
                <span>Sahifalar: {book.page}</span> <br />
                <span>Yil: {book.year}</span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Temur;
