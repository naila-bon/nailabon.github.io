type Props = {
  onSelect: (page: string) => void
}

const BookmarkMenu = ({ onSelect }: Props) => {
  return (
    <div className="bookmarks">
      <button onClick={() => onSelect('about')}>À propos</button>
      <button onClick={() => onSelect('skills')}>Compétences</button>
      <button onClick={() => onSelect('projects')}>Projets</button>
      <button onClick={() => onSelect('contact')}>Contact</button>
    </div>
  )
}

export default BookmarkMenu
