export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <div className="text-xl font-bold tracking-wide text-gray-900">
            GangtokCab
          </div>

          <div className="text-xs text-gray-500">
            Premium Taxi Service
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Taxi Services
          </a>

          <a
            href="#tours"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Tours
          </a>

          <a
            href="#fleet"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Fleet
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Contact
          </a>
        </div>

        {/* Booking Button */}
        <a
          href="#booking"
          className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Book Now
        </a>

      </div>
    </nav>
  );
}