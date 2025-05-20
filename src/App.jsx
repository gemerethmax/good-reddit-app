import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { About } from './components/AboutPage'
import { Contact } from './components/ContactPage'
import { RootLayout } from './layout/RootLayout'
import { HomeLayout } from './components/HomeLayoutPage'
import { NotFound } from './components/NotFoundPage'
import { SubRedditPage } from './components/SubRedditPage'

const  App = () => {
  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomeLayout />}/>
      <Route path=":subReddit" element={<SubRedditPage />} />
      <Route path='about' element={<About /> } />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

  return (
        <RouterProvider router={router} />
      )
}

export default App
