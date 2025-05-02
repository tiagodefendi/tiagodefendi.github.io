import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero/Hero"
import Portfolio from "@/components/Portfolio/Portfolio";
import Footer from "@/components/Footer";

function Home() {
  return (
    <main>
      <Navbar />

      <Hero />
      <Portfolio />

      <Footer />

      <Toaster position="top-center" reverseOrder={false} />
    </main>
  )
}

export default Home;
