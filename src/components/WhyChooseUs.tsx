export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Why Choose GangtokCab
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Travel With Confidence
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            From local taxi rides to complete Sikkim tours, we focus on
            comfort, reliability and a smooth travel experience.
          </p>
        </div>

        {/* Features */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              🚕
            </div>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              Local Expertise
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Experienced local drivers who know Gangtok, Sikkim and
              surrounding routes.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              🚗
            </div>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              Clean & Comfortable Cars
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Comfortable vehicles maintained to make your journey relaxed
              from pickup to destination.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              🕒
            </div>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              On-Time Service
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              We value your time and aim to provide dependable pickups and
              timely transfers.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              🛡️
            </div>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              Reliable Support
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Friendly assistance before and during your journey whenever
              you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}