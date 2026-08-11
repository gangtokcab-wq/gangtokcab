import Image from "next/image";

export default function Fleet() {
  const vehicles = [
    {
      category: "Hatchback",
      vehicle: "New Model WagonR or Similar",
      passengers: "1–3 Passengers",
      description:
        "A practical and spacious choice for couples, solo travellers and small families.",
      image: "/fleet/vehicles/wagonr.jpg",
    },
    {
      category: "Sedan",
      vehicle: "Swift Dzire or Similar",
      passengers: "1–4 Passengers",
      description:
        "A comfortable sedan option for airport transfers, sightseeing and city-to-city travel.",
      image: "/fleet/vehicles/swift-dzire.jpg",
    },
    {
      category: "Luxury SUV",
      vehicle: "Innova / Xylo / Scorpio-N / SUV",
      passengers: "1–6 Passengers",
      description:
        "Spacious and comfortable vehicles suited for families, sightseeing and longer journeys.",
      image: "/fleet/vehicles/luxury-suv.jpg",
    },
    {
      category: "Premium Luxury",
      vehicle: "Innova Crysta",
      passengers: "1–6 Passengers",
      description:
        "A premium and refined travel experience for families, couples and longer journeys.",
      image: "/fleet/vehicles/innova-crysta.jpg",
    },
    {
      category: "Utility SUV",
      vehicle: "Bolero / Sumo",
      passengers: "1–7 Passengers",
      description:
        "Practical and dependable vehicles suitable for suitable routes and group travel.",
      image: "/fleet/vehicles/bolero-sumo.jpg",
    },
    {
      category: "Group Travel",
      vehicle: "Tempo Traveller",
      passengers: "Group Travel",
      description:
        "A spacious option for families, friends and larger groups travelling together.",
      image: "/fleet/vehicles/tempo-traveller.jpg",
    },
    {
      category: "Group Transfers",
      vehicle: "Bus",
      passengers: "For Transfers Only",
      description:
        "Suitable for larger groups and organised transfer requirements.",
      image: "/fleet/vehicles/bus.jpg",
    },
  ];

  return (
    <section
      id="fleet"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      {/* Fleet Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/fleet/gangtokcab-fleet-bg.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/70" />

      {/* Fleet Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Our Fleet
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Comfortable Vehicles for Every Journey
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-200">
            Choose from practical city cars, comfortable luxury vehicles
            and spacious group travel options for your journey across
            Sikkim and Darjeeling.
          </p>
        </div>

        {/* Fleet Cards */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.vehicle}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Vehicle Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.vehicle} - GangtokCab`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Vehicle Information */}
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  {vehicle.category}
                </p>

                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  {vehicle.vehicle}
                </h3>

                <p className="mt-3 text-sm font-medium text-slate-700">
                  {vehicle.passengers}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {vehicle.description}
                </p>
              </div>
            </div>
          ))}

          {/* Others */}
          <div className="flex min-h-[290px] flex-col justify-between rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50/90 p-6 transition duration-300 hover:-translate-y-1 hover:bg-blue-50">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-4xl shadow-sm">
                ✨
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-blue-600">
                Others
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Custom Vehicle Requirement
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Looking for something different? Tell us your group size
                and travel requirements and we will help arrange a suitable
                vehicle.
              </p>
            </div>

            <a
              href="#booking"
              className="mt-6 inline-flex w-fit rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Request a Vehicle
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}