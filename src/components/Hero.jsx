export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200 mb-4">
              Nuevo
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Acelera tu presencia digital con una landing moderna
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Presenta tu producto, valida ideas y convierte visitantes en clientes con un diseño claro y efectivo.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Solicitar una demo
              </a>
              <a
                href="#features"
                className="inline-flex justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 shadow-sm hover:bg-slate-50"
              >
                Ver características
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[16/10] w-full rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 p-1 shadow-xl">
              <div className="h-full w-full rounded-xl bg-white p-6 grid grid-cols-3 gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-20 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200"
                  />
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-indigo-200 blur-3xl opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
