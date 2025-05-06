import React, { useEffect, useState } from "react";
import { API } from "../../utils/config";

const AddBook = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [inputValues, setInputValues] = useState({});
    const [authors, setAuthors] = useState(null);

    const onChange = (evt) => {
        setInputValues({
            ...inputValues,
            [evt.target.name]: evt.target.value,
        });
    };

    const handleImageChange = (evt) => {
        const selectedFile = evt.target.files[0];
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
    };

    useEffect(() => {
        const genreId = parseInt(inputValues.genre_id);
        if (!isNaN(genreId)) {
            API.get(`author/genreId/${genreId}`)
                .then(response => setAuthors(response.data))
                .catch(err => console.error('Error fetching authors:', err));
        }
    }, [inputValues.genre_id]);

    const token = localStorage.getItem("token");

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const formData = new FormData();
        formData.append("title", inputValues.title);
        formData.append("page", inputValues.page);
        formData.append("year", inputValues.year);
        formData.append("description", inputValues.description);
        formData.append("price", inputValues.price);
        formData.append("author_id", parseInt(inputValues.author_id));
        formData.append("genre_id", parseInt(inputValues.genre_id));
        formData.append("image", file);

        API.post("/book", formData, {
            headers: {
                Authorization: token,
                "Content-Type": "multipart/form-data",
            },
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    };

    return (
        <div className="flex flex-col lg:flex-row h-auto lg:h-screen">
            <div className="w-full lg:w-1/2 bg-[#F3F3F3] flex flex-col items-center justify-center p-6">
                <div className="w-[200px] sm:w-[300px] h-[300px] sm:h-[400px] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                    {preview && (
                        <img
                            src={preview}
                            alt="Book Cover"
                            className="w-full h-full object-cover rounded-md"
                        />
                    )}
                </div>
                <label
                    htmlFor="image-upload"
                    className="mt-4 bg-[#152540] text-white px-4 py-2 rounded-full w-full sm:w-96 text-center cursor-pointer"
                >
                    Upload Cover
                    <input
                        id="image-upload"
                        type="file"
                        name="image"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                </label>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-white p-6 space-y-4">
                <h2 className="text-2xl sm:text-4xl font-black text-gray-800 mb-4">Add Book</h2>
                <form onSubmit={handleSubmit} className="w-full space-y-4">
                    <input
                        onChange={onChange}
                        type="text"
                        name="title"
                        placeholder="Title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-[10px]"
                    />
                    <input
                        onChange={onChange}
                        type="text"
                        name="page"
                        placeholder="Pages"
                        className="w-full px-4 py-2 border border-gray-300 rounded-[10px]"
                    />
                    <input
                        onChange={onChange}
                        type="text"
                        name="year"
                        placeholder="Year"
                        className="w-full px-4 py-2 border border-gray-300 rounded-[10px]"
                    />
                    <input
                        onChange={onChange}
                        type="text"
                        name="price"
                        placeholder="Price"
                        className="w-full px-4 py-2 border border-gray-300 rounded-[10px]"
                    />
                    <select
                        onChange={onChange}
                        name="genre_id"
                        className="w-full px-4 py-2 border border-gray-300 rounded-[10px]"
                    >
                        <option selected disabled>
                            Genre
                        </option>
                        <option value={1}>Temuriylar davri</option>
                        <option value={2}>Jadid adabiyoti</option>
                        <option value={3}>Sovet davri</option>
                        <option value={4}>Mustaqillik davri</option>
                    </select>
                    <select
                        onChange={onChange}
                        name="author_id"
                        className="w-full px-4 py-2 border border-gray-300 rounded-[10px]"
                    >
                        <option selected disabled>
                            Author
                        </option>
                        {authors &&
                            authors.map((author) => (
                                <option key={author.id} value={author.id}>
                                    {author.first_name} {author.last_name}
                                </option>
                            ))}
                    </select>
                    <textarea
                        onChange={onChange}
                        name="description"
                        placeholder="Description"
                        className="w-full px-4 py-2 border border-gray-300 rounded-[10px]"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-[#152540] rounded-full"
                    >
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBook;
