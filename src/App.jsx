import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'

import AppLayout from './layouts/app-layout'

import LandingPage from './pages/landing'
import Auth from './pages/auth'
import RedirectLink from './pages/redirect-link'
import Dashboard from './pages/dashboard'
import LinkPage from './pages/link'
import UrlProvider from './context'
import RequireAuth from './components/require-auth'

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "/link/:id",
        element: (
          <RequireAuth>
            <LinkPage/>
          </RequireAuth>
        ),
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ]
  }
])

function App() {
  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
  )
}
export default App
