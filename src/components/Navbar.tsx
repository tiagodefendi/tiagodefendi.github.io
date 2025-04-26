import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-gray-100">
      <div className="text-2xl font-bold">Tiago Denfendi</div>
      <ul className="flex space-x-8 text-gray-700">
        <li><Link href="#home" className="hover:text-red-500">Home</Link></li>
        <li><Link href="#portfolio" className="hover:text-red-500">Portfolio</Link></li>
        <li><Link href="#contact" className="hover:text-red-500">Contact Me</Link></li>
      </ul>
    </nav>
  )
}
