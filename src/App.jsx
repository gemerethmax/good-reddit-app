import './App.css'
import { PostsList } from './features/posts/PostsList'
import { SubReddits } from './features/posts/SubReddits'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <>
      <NavBar />
      <PostsList />
      <SubReddits />
    </>
  )
}

export default App
