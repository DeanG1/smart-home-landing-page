import AboutUs from "./Components/AboutUs"
import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Header/>
      <AboutUs/>
    </div>
  )
}