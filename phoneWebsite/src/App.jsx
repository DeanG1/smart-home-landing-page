import AboutUs from "./Components/AboutUs"
import Clients from "./Components/Clients"
import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Header/>
      <AboutUs/>
      <Clients/>
    </div>
  )
}