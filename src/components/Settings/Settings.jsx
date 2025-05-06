import React from 'react';
import AHeader from "../../components/AHeader/AHeader";
import { useLang } from '../../context/LangContext/LangContext';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { getTranslation } from '../../lang/getTranslations/getTranslations';

const Settings = () => {
  const { language, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();

  return <>
    <AHeader />
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-blue-500 ' : 'bg-white text-black'}`}>
      <div className="max-w-[710px] container mx-auto p-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">{getTranslation(language, "settings")}</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm text-gray-600">{getTranslation(language, "language")}</label>
            <select
              value={language}
              onChange={(e) => setLang(e.target.value)}
              className="px-4 py-2 border rounded-md"
            >
              <option value="English">English</option>
              <option value="Uzbek">Uzbek</option>
              <option value="Russian">Russian</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <label className="text-sm text-gray-600">{getTranslation(language, "theme")}</label>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 bg-[#152540] text-white rounded-md"
            >
              Theme
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
};

export default Settings;
