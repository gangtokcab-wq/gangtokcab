import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Fleet from "@/components/Fleet";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white md:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          {/* Left Content */}
          <div>
            <div className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              Trusted Taxi Service in Sikkim
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Explore Sikkim
              <span className="block text-blue-400">
                Your Way.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Reliable taxi service for Gangtok, Sikkim, Bagdogra, NJP,
              Darjeeling and North Sikkim. Comfortable cars, experienced
              drivers and dependable service.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="rounded-xl bg-blue-600 px-7 py-4 text-center font-semibold text-white transition hover:bg-blue-500"
              >
                Book Your Cab
              </a>

              <a
                href="#services"
                className="rounded-xl border border-slate-600 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-300">
              <div>
                <span className="font-semibold text-white">✓</span>{" "}
                Local Drivers
              </div>

              <div>
                <span className="font-semibold text-white">✓</span>{" "}
                Clean Vehicles
              </div>

              <div>
                <span className="font-semibold text-white">✓</span>{" "}
                Reliable Service
              </div>
            </div>
          </div>

          {/* Right Visual */}
<div className="relative">
  <div className="absolute -inset-6 rounded-3xl bg-blue-500/20 blur-3xl" />

  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl">
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
      <img
        src="/hero-new.png"
        alt="GangtokCab - Sikkim Taxi Service"
        className="h-full w-full object-cover object-left"
      />

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/40 to-transparent" />
    </div>
  </div>
</div>

        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Our Services
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Taxi Services for Every Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            From airport transfers to local sightseeing and Sikkim tours,
            GangtokCab provides comfortable and reliable travel solutions.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">

          {/* Local Gangtok Taxi */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              🚕
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              Local Gangtok Taxi
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Comfortable local taxi service for sightseeing, shopping,
              hotels and daily travel around Gangtok.
            </p>

            <a
              href="#booking"
              className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Book Local Taxi →
            </a>
          </div>

          {/* Bagdogra Airport Transfer */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              ✈️
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              Bagdogra Airport Transfer
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Reliable airport pickup and drop service between Bagdogra
              Airport and Gangtok, Sikkim.
            </p>

            <a
              href="#booking"
              className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Book Airport Taxi →
            </a>
          </div>

          {/* NJP Railway Transfer */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              🚉
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              NJP Railway Transfer
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Convenient taxi transfers between New Jalpaiguri Railway
              Station and Gangtok with dependable drivers.
            </p>

            <a
              href="#booking"
              className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Book NJP Transfer →
            </a>
          </div>

          {/* Sikkim Sightseeing */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              🏔️
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              Sikkim Sightseeing
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Explore popular destinations across Sikkim with comfortable
              vehicles and experienced local drivers.
            </p>

            <a
              href="#booking"
              className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Explore Sikkim →
            </a>
          </div>

          {/* North Sikkim Tours */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              🏔️
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              North Sikkim Tours
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Plan your North Sikkim journey with reliable transportation
              and experienced drivers familiar with the region.
            </p>

            <a
              href="#booking"
              className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Plan Your Trip →
            </a>
          </div>

          {/* Darjeeling Trips */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              🌄
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              Darjeeling Trips
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Comfortable taxi service for trips between Gangtok,
              Darjeeling and surrounding destinations.
            </p>

            <a
              href="#booking"
              className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Book Darjeeling Trip →
            </a>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Fleet */}
      <Fleet />

    </main>
  );
}