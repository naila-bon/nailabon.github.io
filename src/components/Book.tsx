import Page from './Page'

type BookProps = {
  currentPage: string
}

const Book = ({ currentPage }: BookProps) => {
  switch (currentPage) {
    case 'about':
      return <Page title="À propos" content="Je m'appelle Naila..." />
    case 'skills':
      return <Page title="Compétences" content="React, TypeScript..." />
    case 'projects':
      return <Page title="Projets" content="Voici mes projets..." />
    case 'contact':
      return <Page title="Contact" content="Me contacter..." />
    default:
      return null
  }
}

export default Book
