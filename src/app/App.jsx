import { Routes, Route } from "react-router"
import Navbar from "../components/layout/Navbar"
import Sidebar from "../components/layout/Sidebar"
import Footer from "../components/layout/Footer"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"

const App = () => {
  return (
    <>
      <div className="p-3.5">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App