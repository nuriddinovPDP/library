import React, { useEffect, useState } from "react";
import { API } from "../../utils/config";
import { useLang } from '../../context/LangContext/LangContext';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { getTranslation } from '../../lang/getTranslations/getTranslations';
import AHeader from "../../components/AHeader/AHeader";

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const [file, setFile] = useState(null);
  const [inputValues, setInputValues] = useState({
    first_name: "",
    last_name: "",
    phone: "",
  });
  
  const { language } = useLang();
  const { theme } = useTheme();

  useEffect(() => {
    API.get("/user/me")
      .then((res) => {
        setUserData(res.data);
        setInputValues({
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          phone: res.data.phone,
        });
        setFile(res.data.image);
      });
  }, []);

  const onChange = (evt) => {
    setInputValues({ ...inputValues, [evt.target.name]: evt.target.value });
  };

  const handleFileChange = (evt) => {
    setFile(evt.target.files[0]);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("first_name", inputValues.first_name);
    formData.append("last_name", inputValues.last_name);
    formData.append("phone", inputValues.phone);
    formData.append("image", file);

    API.put("/user/account", formData).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white text-black'}`}>
      <div className={`container mx-auto ${theme === 'dark' ? 'bg-gray-900' : ''}`}>
        <AHeader />
        <div className="p-6 flex justify-center items-center bg-gray-900">
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full">
              <img
                src={`https://books-backend-production-6f61.up.railway.app/${userData?.image}`}
                className="w-full h-full object-cover rounded-full"
                alt="Profile"
              />
            </div>
            <label htmlFor="file" className="mt-4 px-4 py-2 bg-[#152540] text-white rounded-md cursor-pointer">
              Change image
            </label>
            <input type="file" id="file" onChange={handleFileChange} className="hidden" />
          </div>
          <form onSubmit={handleSubmit} className="w-full sm:w-96 md:w-1/2 lg:w-1/2 pl-8 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="mt-7 block text-sm font-medium text-gray-700">
                {getTranslation(language, "first_name")}
              </label>
              <input
                type="text"
                name="first_name"
                value={inputValues.first_name}
                onChange={onChange}
                className="mt-1 block w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="mt-7 block text-sm font-medium text-gray-700">
                {getTranslation(language, "last_name")}
              </label>
              <input
                type="text"
                name="last_name"
                value={inputValues.last_name}
                onChange={onChange}
                className="mt-1 block w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="mt-7 block text-sm font-medium text-gray-700">
                {getTranslation(language, "phone")}
              </label>
              <input
                type="text"
                name="phone"
                value={inputValues.phone}
                onChange={onChange}
                className="mt-1 mb-5 block w-full p-2 border rounded-md"
              />
            </div>

            <div className="flex justify-end sm:col-span-2">
              <button type="submit" className="px-6 py-2 bg-[#152540] text-white font-medium rounded-lg">
                {getTranslation(language, "saveChanges")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
