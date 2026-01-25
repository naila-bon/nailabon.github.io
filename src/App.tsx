import { useState } from 'react'
import Book from './components/Book'
import BookmarkMenu from './components/BookmarkMenu'

function App() {
  const [currentPage, setCurrentPage] = useState('about')

  return (
    <div className="app">
      <BookmarkMenu onSelect={setCurrentPage} />
      <Book currentPage={currentPage} />
    </div>
  )
}

export default App
