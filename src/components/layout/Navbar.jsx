const Navbar = () => {
  return (
    <div className="flex items-center bg-gray-100 px-8 py-4 rounded-2xl">
      <h1 className="text-[#364722] text-2xl font-black">HOSPITAL</h1>
      <ul className="flex">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar