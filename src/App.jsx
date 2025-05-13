import './App.css'
import { PostsList } from './features/posts/PostsList'
import { SubReddits } from './features/posts/SubReddits'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import { About } from './components/About'
import { Contact } from './components/Contact'

const  App = () => {
  

  return (
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<PostsList />} />

            <Route path="/about" element={<About /> } />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      )
}

export default App
