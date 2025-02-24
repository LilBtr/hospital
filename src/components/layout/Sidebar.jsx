import NewsCard from "../common/NewsCard"

const Sidebar = () => {
  return (
    <div className="w-[35%] max-h-[100vh] py-6 px-3.5 flex flex-col gap-3 bg-gray-100 rounded-2xl overflow-y-scroll">
      <NewsCard title="title" text="text" />
      <NewsCard title="title" text="text" />
    </div>
  )
}

export default Sidebar