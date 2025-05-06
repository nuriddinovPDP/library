import React, { useState } from 'react';
import { API } from "../../utils/config";
import AHeader from "../../components/AHeader/AHeader";
import { useLang } from '../../context/LangContext/LangContext';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { getTranslation } from '../../lang/getTranslations/getTranslations';

const Security = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const { language } = useLang();
  const { theme } = useTheme();

  const onChange = (evt) => {
    setInputValues({ ...inputValues, [evt.target.name]: evt.target.value });
  };

  const handleChange = (e) => {
    e.preventDefault();

    if (inputValues.newPassword !== inputValues.confirmNewPassword) {
      alert(getTranslation(language, "passwordMismatch"));
      return;
    }

    API.put("/user/security", {
      email: inputValues.email,
      currentPassword: inputValues.currentPassword,
      newPassword: inputValues.newPassword,
    })
      .then((res) => {
        alert(getTranslation(language, "passwordChangeSuccess"));
      })
      .catch((err) => {
        alert(getTranslation(language, "passwordChangeError"));
        console.error(err);
      });
  };

  return <> <AHeader />
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : ' bg-white text-black'} py-12 px-6`}>
      <div className={`max-w-[710px] p-6 mx-auto w-full bg-gray-900`}>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          {getTranslation(language, "changeOrRecoverPassword")}
        </h2>
        <form onSubmit={handleChange} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              {getTranslation(language, "email")}
            </label>
            <input
              type="email"
              name="email"
              value={inputValues.email}
              onChange={onChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md"
              placeholder={getTranslation(language, "email")}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              {getTranslation(language, "currentPassword")}
            </label>
            <input
              type="password"
              name="currentPassword"
              value={inputValues.currentPassword}
              onChange={onChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md"
              required
              placeholder={getTranslation(language, "currentPassword")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              {getTranslation(language, "newPassword")}
            </label>
            <input
              type="password"
              name="newPassword"
              value={inputValues.newPassword}
              onChange={onChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md"
              required
              placeholder={getTranslation(language, "newPassword")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              {getTranslation(language, "confirmPassword")}
            </label>
            <input
              type="password"
              name="confirmNewPassword"
              value={inputValues.confirmNewPassword}
              onChange={onChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md"
              required
              placeholder={getTranslation(language, "confirmPassword")}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-[#152540] text-white font-medium rounded-lg"
            >
              {getTranslation(language, "saveChanges")}
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
};

export default Security;
