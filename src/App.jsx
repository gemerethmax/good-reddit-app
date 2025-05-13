import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { RootLayout } from './layout/RootLayout'
import { Home } from './components/Home'
import { NotFound } from './components/NotFound'

const  App = () => {
  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />}/> 
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
