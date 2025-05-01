import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero/Hero"
import Portfolio from "@/components/Portfolio/Portfolio";

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Portfolio />

      <Toaster position="top-center" reverseOrder={false} />
    </main>
  )
}

export default Home;
