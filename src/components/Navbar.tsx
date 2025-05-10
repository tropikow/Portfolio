'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-sm border-b border-white/10">
      <ul className="flex justify-center gap-6 p-4 text-sm uppercase tracking-widest">
        <li><a href="#inicio" className="hover:text-gray-400">Inicio</a></li>
        <li><a href="#about" className="hover:text-gray-400">Sobre mí</a></li>
        <li><a href="#experience" className="hover:text-gray-400">Experiencia</a></li>
        <li><a href="#project" className="hover:text-gray-400">Proyectos</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contacto</a></li>
      </ul>
    </nav>
  );
}
