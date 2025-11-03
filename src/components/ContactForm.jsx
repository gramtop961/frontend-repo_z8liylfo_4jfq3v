import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación mínima en cliente
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    // Simulación de envío exitoso (lista para conectarse a un backend)
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 900);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Hablemos de tu proyecto
            </h2>
            <p className="mt-4 text-slate-600">
              Cuéntanos qué necesitas y te responderemos en menos de 24 horas.
            </p>

            <div className="mt-8 space-y-4 text-slate-700">
              <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-indigo-600" /> contacto@tuempresa.com</p>
              <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-indigo-600" /> +34 600 000 000</p>
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-indigo-600" /> Madrid, España</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 md:p-8 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Juan Pérez"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="juan@correo.com"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Teléfono</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Opcional"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Mensaje</label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Cuéntanos brevemente qué necesitas"
                  required
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:opacity-70"
              >
                <Send className="h-4 w-4" />
                {status === "loading" ? "Enviando..." : "Enviar mensaje"}
              </button>
              {status === "success" && (
                <span className="text-sm text-emerald-600">¡Mensaje enviado con éxito!</span>
              )}
              {status === "error" && (
                <span className="text-sm text-rose-600">Revisa los campos obligatorios.</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
