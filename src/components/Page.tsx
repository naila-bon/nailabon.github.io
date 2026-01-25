type PageProps = {
  title: string
  content: string
}

const Page = ({ title, content }: PageProps) => {
  return (
    <div className="page">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default Page
