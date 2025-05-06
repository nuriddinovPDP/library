import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext/AuthContext.jsx'
import { LangProvider } from './context/LangContext/LangContext.jsx'
import { ThemeProvider } from './context/ThemeContext/ThemeContext.jsx'
import { SearchProvider } from './context/SearchContext/SearchContext.jsx'

createRoot(document.getElementById('root')).render(
    <LangProvider>
        <AuthProvider>
            <ThemeProvider>
                <SearchProvider>
                    <App />
                </SearchProvider>
            </ThemeProvider>
        </AuthProvider>
    </LangProvider>
)
