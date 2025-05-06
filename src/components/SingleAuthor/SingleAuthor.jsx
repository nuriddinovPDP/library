import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API } from '../../utils/config';
import Header from '../Header/Header';

const SingleAuthor = () => {
    const { authorId } = useParams();
    const [author, setAuthor] = useState(null);
    const token = localStorage.getItem('token');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        API.get('/book/genreId/1').then((response) => {
            const books = response.data.map((book) => ({
                ...book,
            }));
            setBooks(books);
        });
    }, []);

    useEffect(() => {
        if (authorId) {
            API.get(`/author/authorId/${authorId}`, {
                headers: { Authorization: token },
            })
                .then((data) => {
                    setAuthor(data.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [authorId]);

    const book = books.filter((item) => item.author_id === author?.id);

    return (
        <>
            <Header />
            <div className="text-white min-h-screen p-4 sm:p-8">
                {author && (
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            <img
                                src={`https://books-backend-production-6f61.up.railway.app/${author.image}`}
                                className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-lg"
                                alt={`${author.first_name} ${author.last_name}`}
                            />
                            <div className="text-center md:text-left">
                                <h1 className="text-3xl sm:text-4xl font-bold">
                                    {author.first_name} {author.last_name}
                                </h1>
                                <p className="mt-2 text-gray-400">{author.country}</p>
                            </div>
                        </div>

                        <div className="mt-6 border-t border-gray-700 pt-6">
                            <p className="text-lg leading-7">{author.bio}</p>
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row gap-6 text-sm">
                            <div>
                                <p className="font-semibold text-[#C9AC8C]">Tavallud sanasi:</p>
                                <p className="text-gray-300">{author.date_of_birth}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-[#C9AC8C]">Vafot sanasi:</p>
                                <p className="text-gray-300">{author.date_of_death}</p>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h2 className="text-2xl font-bold mb-4">Asarlari</h2>
                            <div className="flex justify-center items-center min-h-screen p-7">
                                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-8">
                                    {book.map((book) => (
                                        <li
                                            className="w-[165px] text-white"
                                            key={book.id}
                                        >
                                            <Link to={`/book/${book.id}`}>

                                                <img
                                                    src={`https://books-backend-production-6f61.up.railway.app/${book.image}`}
                                                    className="w-[165px] h-64 object-cover rounded-lg mb-3"
                                                />
                                                <h2 className="text-md font-bold text-[#C9AC8C]">
                                                    {book.title}
                                                </h2>
                                                <p className="text-sm text-[#ccc]"><span>Sahifalar: {book.page}</span>  <span>Yil: {book.year}</span></p>
                                            </Link >
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default SingleAuthor;
