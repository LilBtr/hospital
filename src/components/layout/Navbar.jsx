const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 px-8 py-4 rounded-2xl mb-3.5">
      <a href="/" className="text-[#364722] text-2xl font-black">HOSPITAL</a>
      <ul className="flex gap-4 text-gray-600">
        <li><a href="/stats">Stats</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/auth">Login</a></li>
      </ul>
    </div>
  )
}

export default Navbar