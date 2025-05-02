import Link from "next/link"
import ContactButton from "./Buttons/ContactButton"

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-slate-200">
      <div className="text-2xl font-bold">Tiago Denfendi</div>
      <ul className="flex space-x-8 text-gray-700">
        <li><Link href="#" className="hover:text-red-500">Home</Link></li>
        <li><Link href="#" className="hover:text-red-500">Portfolio</Link></li>
        <ContactButton className="hover:text-red-500" />
      </ul>
    </nav>
  )
}

export default Navbar
