'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['Inicio', 'Sobre mí', 'Experiencia', 'Proyectos', 'Contacto']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-sm text-white border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-lg">Jovanny Dev</h1>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6 text-sm uppercase tracking-wide">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase().replace(' ', '')}`} className="hover:text-cyan-400 transition">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <ul className="md:hidden bg-black bg-opacity-90 px-4 pb-4 space-y-2 text-center text-sm uppercase tracking-wide">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(' ', '')}`}
                className="block py-2 hover:text-cyan-400 transition"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
