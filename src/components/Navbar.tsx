'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

const links = ['Inicio', 'Sobre mi', 'Stack', 'Experiencia', 'Proyectos', 'Contacto']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloquear scroll del fondo cuando el sidebar está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 right-0 w-full z-50 flex items-center justify-between px-6 transition-all duration-300',
          // fondo y blur siempre, pero más opaco al hacer scroll
          'bg-black bg-opacity-60 backdrop-blur-sm border-b border-white/10',
          scrolled && 'bg-opacity-80 py-2 shadow-lg',
          !scrolled && 'py-4'
        )}
      >
        <span className="font-bold text-lg text-white">Jovanny Dev</span>

        {/* Desktop links */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '')}`}
              className="text-white hover:text-cyan-400 transition"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Sidebar móvil */}
      <aside
        className={clsx(
          'fixed top-0 right-0 h-full w-64 z-50 transform transition-transform duration-300',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Fondo difuso detrás del sidebar */}
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />

        {/* Contenido del sidebar */}
        <div className="relative h-full bg-black/90 p-6 flex flex-col">
          <button
            className="self-end mb-8 p-2 text-white hover:text-red-400"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
          >
            <X size={28} />
          </button>

          <nav className="flex flex-col space-y-6">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '')}`}
                className="text-white text-lg hover:text-cyan-400 transition"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}
