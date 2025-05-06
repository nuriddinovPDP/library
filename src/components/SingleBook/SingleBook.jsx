import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API } from '../../utils/config';
import Header from '../Header/Header';

const SingleBook = () => {
    const { bookId } = useParams();
    const [book, setBook] = useState(null);
    const [recommendedBooks, setRecommendedBooks] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (bookId) {
            API.get(`/book/bookId/${bookId}`, {
                headers: { Authorization: token },
            })
                .then(({ data }) => {
                    setBook(data);
                    fetchRecommendedBooks(data.genre_id);
                })
                .catch((err) => console.error(err));
        }
    }, [bookId, token]);

    const fetchRecommendedBooks = (genreId) => {
        API.get(`/book/genreId/${genreId}`)
            .then(({ data }) => setRecommendedBooks(data))
            .catch((err) => console.error('Error fetching recommended books:', err));
    };

    return (
        <>
            <Header />
            <div className="overflow-hidden text-white min-h-screen p-6">
                {book && (
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-8 mb-12">
                            <div className="flex-shrink-0">
                                <img
                                    src={`https://books-backend-production-6f61.up.railway.app/${book.image}`}
                                    className="w-80 h-auto object-cover rounded-lg shadow-lg"
                                    alt={book.title}
                                />
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
                                    <p className="text-lg text-gray-300 mb-6">{book.description}</p>
                                    <div className="text-sm space-y-2">
                                        <p className="font-normal text-xl">
                                            <span className="text-white opacity-60">Yozuvchi:</span> {book.author_id}
                                        </p>
                                        <p className="font-normal text-xl">
                                            <span className="text-white opacity-60">Sahifalar soni:</span> {book.page}
                                        </p>
                                        <p className="font-normal text-xl">
                                            <span className="text-white opacity-60">Chop etilgan:</span> {book.year}
                                        </p>
                                        <p className="font-normal text-xl">
                                            <span className="text-white opacity-60">Janr:</span> {book.genre_id}
                                        </p>
                                        <p className="font-normal text-xl">
                                            <span className="text-white opacity-60">Nashriyot:</span> Nihol nashr
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {recommendedBooks.length > 0 && (
                            <div>
                                <h2 className="text-2xl font-semibold mb-6">Sizga yoqishi mumkin</h2>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                                    {recommendedBooks.map((recBook) => (
                                        <li className="text-white" key={recBook.id}>
                                            <Link to={`/book/${recBook.id}`}>
                                                <img
                                                    src={`https://books-backend-production-6f61.up.railway.app/${recBook.image}`}
                                                    className="w-full h-64 object-cover rounded-lg mb-3"
                                                    alt={recBook.title}
                                                />
                                                <h2 className="text-md font-bold text-[#C9AC8C]">
                                                    {recBook.title}
                                                </h2>
                                                <p className="text-sm text-[#ccc]">
                                                    <span>Sahifalar: {recBook.page}</span> <br />
                                                    <span>Yil: {recBook.year}</span>
                                                </p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default SingleBook;
