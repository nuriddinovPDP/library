import React, { useState } from 'react';
import { API } from '../../utils/config';

function AddAuthors() {
  const [file, setFile] = useState(null);
  const [inputValues, setInputValues] = useState({});

  const onChange = (evt) => {
    setInputValues({ ...inputValues, [evt.target.name]: evt.target.value });
  };

  const token = localStorage.getItem('token');

  const onSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append('first_name', inputValues.first_name);
    formData.append('last_name', inputValues.last_name);
    formData.append('date_of_birth', inputValues.date_of_birth);
    formData.append('date_of_death', inputValues.date_of_death);
    formData.append('country', inputValues.country);
    formData.append('bio', inputValues.bio);
    formData.append('genre_id', inputValues.genre_id);
    formData.append('image', file);

    API.post('/author', formData, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 bg-[#F3F3F3] flex flex-col items-center justify-center p-6">
        <div className="w-[200px] sm:w-[300px] h-[300px] sm:h-[400px] bg-[#F3F3F3] border border-gray-300 rounded-md flex items-center justify-center">
          {file && (
            <img
              src={URL.createObjectURL(file)}
              className="w-full h-full object-cover rounded-md"
              alt="Author"
            />
          )}
        </div>
        <label
          className="mt-4 bg-[#152540] text-white px-4 py-2 rounded-full w-full sm:w-96 text-center cursor-pointer"
        >
          Upload cover
          <input
            type="file"
            name="image"
            className="hidden"
            onChange={(evt) => setFile(evt.target.files[0])}
          />
        </label>
      </div>
      <form
        onSubmit={onSubmit}
        className="w-full lg:w-1/2 bg-white flex flex-col space-y-4 p-6 sm:p-12"
      >
        <h2 className="text-2xl sm:text-4xl font-black mb-4">Add Author</h2>
        <input
          onChange={onChange}
          name="first_name"
          type="text"
          placeholder="First Name"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <input
          onChange={onChange}
          name="last_name"
          type="text"
          placeholder="Last Name"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <input
          onChange={onChange}
          name="date_of_birth"
          type="number"
          placeholder="Date of Birth"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <input
          onChange={onChange}
          name="date_of_death"
          type="number"
          placeholder="Date of Death"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <input
          onChange={onChange}
          name="bio"
          type="text"
          placeholder="Bio"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <input
          onChange={onChange}
          name="country"
          type="text"
          placeholder="Country"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <input
          onChange={onChange}
          name="genre_id"
          type="number"
          placeholder="Genre ID"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <button
          className="mt-4 bg-[#152540] text-white px-4 py-2 rounded-full w-full cursor-pointer"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default AddAuthors;
