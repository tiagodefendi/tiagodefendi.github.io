'use client'

import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaYoutube, FaSpotify, FaFacebook } from 'react-icons/fa'
import Link from 'next/link'
import ContactButton from './Buttons/ContactButton'
import WhatsAppButton from './Buttons/WhatsAppButton'

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-neutral-200 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Contact</h3>
                    <div className="flex flex-col gap-3 justify-start items-start">
                        <ContactButton
                            className="hover:underline"
                            buttonName="tiagodefendidasilva@gmail.com"
                        />
                        <WhatsAppButton
                            className="hover:underline"
                            buttonName="+55 44 99890-5287"
                        />
                    </div>
                    <p>Address: Rua Ipê, 490 - Araruna, Paraná</p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Social Media</h3>
                    <div className="flex space-x-4 text-2xl">
                        <a href="https://linkedin.com/in/tiagodefendi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/tiagodefendi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://instagram.com/tiago_defendi" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://x.com/tiago_defendi" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="https://facebook.com/tiagodef" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="https://youtube.com/@tiago_defendi" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <FaYoutube />
                        </a>
                        <a href="https://open.spotify.com/user/21jsoadtnocg4v2tf26x24rey" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                            <FaSpotify />
                        </a>
                    </div>
                </div>

                <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Useful Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:underline">About Me</Link></li>
                        <li><Link href="#" className="hover:underline">Portfolio</Link></li>
                        <li><Link href="https://linktr.ee/tiago_defendi" className="hover:underline">Link Tree</Link></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-neutral-700 mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
                <p>© 2024 Tiago Defendi. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <Link href="#" className="hover:underline">Terms of Use</Link>
                    <Link href="#" className="hover:underline">Cookie Policy</Link>
                </div>
                <p className="mt-4 md:mt-0">
                    Developed with ❤️ by {' '}
                    <a href="https://github.com/tiagodefendi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline">
                        Tiago Defendi
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer