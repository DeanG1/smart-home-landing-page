import AboutUs from "./Components/AboutUs";
import Clients from "./Components/Clients";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Testimonial from "./Components/Testimonial";
export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Header />
      <AboutUs />
      <Clients />
      <Testimonial />
    </div>
  );
}
