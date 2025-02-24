const NewsCard = ({title, text}) => {
  return (
    <div className="border rounded-xl border-gray-300 py-3 px-2">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}

export default NewsCard