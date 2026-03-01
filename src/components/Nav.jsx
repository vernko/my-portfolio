import { useState } from 'react'
import './Nav.css'

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Blog', 'Contact']

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <nav className="nav">
            <span className="nav-logo">Vern Kofford</span>

            <div className="nav-links">
                {NAV_LINKS.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>
                ))}
            </div>

            <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? '✕' : '☰'}
            </button>

            {menuOpen && (
                <div className="nav-mobile">
                {NAV_LINKS.map((link) => (
                    <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                    {link}
                    </a>
                ))}
                </div>
            )}
        </nav>
    )
}