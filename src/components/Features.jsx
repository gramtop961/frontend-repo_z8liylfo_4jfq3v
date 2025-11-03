import { CheckCircle, LineChart, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Rápido de lanzar",
    desc: "Listo en horas, no en semanas. Optimizado para conversión desde el primer día.",
  },
  {
    icon: LineChart,
    title: "Enfocado en resultados",
    desc: "Secciones pensadas para guiar a tus visitantes hacia la acción que buscas.",
  },
  {
    icon: Shield,
    title: "Confiable y seguro",
    desc: "Buenas prácticas, rendimiento y accesibilidad para generar confianza.",
  },
  {
    icon: CheckCircle,
    title: "Fácil de personalizar",
    desc: "Cambia colores, textos e imágenes sin fricción para adaptarlo a tu marca.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Todo lo que necesitas en una landing
          </h2>
          <p className="mt-4 text-slate-600">
            Componentes claros, mensajes directos y un formulario de contacto que convierte.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
