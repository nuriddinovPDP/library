import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicPage from './pages/PublicPage/PublicPage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { useAuth } from './context/AuthContext/AuthContext'
import PrivatePage from './pages/PrivatePage/PrivatePage'
import Temur from './components/Temur/Temur'
import Jadid from './components/Jadid/Jadid'
import Sovet from './components/Sovet/Sovet'
import Mustaqil from './components/Mustaqil/Mustaqil'
import ATemur  from './components/ATemur/ATemur'
import Authors from './pages/Authors/Authors'
import AJadid from './components/AJadid/AJadid'
import ASovet from './components/ASovet/ASovet'
import AMustaqil from './components/AMustaqil/AMustaqil'
import SingleBook from './components/SingleBook/SingleBook'
import SingleAuthor from './components/SingleAuthor/SingleAuthor'
import AddBooks from './pages/AddBooks/AddBooks'
import AddAuthors from './pages/AddAuthors/AddAuthors'
import Profile from './pages/Profile/Profile'
import Security from './components/Security/Security'
import Settings from './components/Settings/Settings'

function App() {
  const { isAutenticated } = useAuth()
    
  const router = createBrowserRouter([
    {
      path: '/',
      // element: isAutenticated ? <PrivatePage /> : <PublicPage />,
      element: <PrivatePage/>,

      children: [
        {
          path: 'temur',
          element: <Temur />,
        }, {
          path: 'jadid',
          element: <Jadid />
        }, {
          path: 'sovet',
          element: <Sovet />
        }, {
          path: 'mustaqil',
          element: <Mustaqil />
        }
      ]
    },
    {
      path: '/book/:bookId',
      element: <SingleBook />
    }, {
      path: `/author/:authorId`,
      element: <SingleAuthor />
    },
    {
      path: '/authors',
      element: <Authors />,
      children: [
        {
          path: 'temurAuthors',
          element: <ATemur />
        }, {
          path: 'jadidAuthors',
          element: <AJadid />
        }, {
          path: 'sovetAuthors',
          element: <ASovet />
        }, {
          path: 'mustaqilAuthors',
          element: <AMustaqil />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }, {
      path: 'add-book',
      element: <AddBooks />
    }, {
      path: 'add-author',
      element: <AddAuthors />
    }, {
      path: '/profile',
      element: <Profile />
    },
    {
      path: "security",
      element: <Security />
    }, {
      path: "settings",
      element: <Settings />
    }
  ])
  return <RouterProvider router={router} />
}

export default App
