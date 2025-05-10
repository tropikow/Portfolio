import { Linkedin, MessageCircle, Github } from "lucide-react";
import Section from "@/components/Section";

export default function ContactSection() {
  return (
    <Section id="contacto">
      <div className="max-w-xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-6">Contacto</h2>
        <p className="text-center text-gray-400 mb-10">
          ¿Tienes un proyecto o idea en mente? Escríbeme y lo hablamos.
        </p>

        <form
          className="flex flex-col gap-4"
          action="https://formsubmit.co/jovannydevops@gmail.com"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="bg-white/5 p-3 rounded-lg border border-white/10 text-white placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            required
            className="bg-white/5 p-3 rounded-lg border border-white/10 text-white placeholder-gray-400"
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows={5}
            required
            className="bg-white/5 p-3 rounded-lg border border-white/10 text-white placeholder-gray-400"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Enviar mensaje
          </button>
        </form>

        {/* Íconos de redes */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/jovannyruizlovera/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/tropikow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
          >
            <Github size={28} />
          </a>
          <a
            href="https://wa.me/573157569760?text=Hola%20Jovanny,%20vi%20tu%20portafolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition"
          >
            <MessageCircle size={28} />
          </a>
        </div>
      </div>
    </Section>
  );
}
