import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold text-slate-900">Launch</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#features" className="hover:text-slate-900 transition">Características</a>
            <a href="#contact" className="hover:text-slate-900 transition">Contacto</a>
            <a href="#about" className="hover:text-slate-900 transition">Sobre nosotros</a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Empezar
          </a>
        </div>
      </div>
    </header>
  );
}
