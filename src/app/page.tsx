"use client";

import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Fleet from "@/components/Fleet";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzP3gy6MhR5jcMDw8yn0xh7RF5-1JczLfLN0kCcisnI8KPUYiFi7kNOJUws-tbVSiFMbA/exec";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    travelDate: "",
    adults: "",
    children: "",
    childAges: "",
    vehicle: "",
    tripType: "",
    requirement: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitting(true);
    setMessage("");

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setMessage(
          "Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly."
        );

        setFormData({
          name: "",
          phone: "",
          pickup: "",
          destination: "",
          travelDate: "",
          adults: "",
    children: "",
    childAges: "",
          vehicle: "",
          tripType: "",
          requirement: "",
        });
      } else {
        setMessage(
          "Unable to submit your enquiry right now. Please try again."
        );
      }
    } catch (error) {
      console.error("Enquiry submission error:", error);

      setMessage(
        "Something went wrong while submitting your enquiry. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

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
              <span className="block text-blue-400">Your Way.</span>
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
      <section id="services" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Our Services
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Taxi Services for Every Journey
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
              From airport and railway transfers to local sightseeing and
              complete Sikkim tours, GangtokCab offers comfortable vehicles,
              experienced drivers and dependable travel services.
            </p>
          </div>

          {/* Service Cards */}
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Local Gangtok Taxi */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-7 w-7"
                >
                  <path d="M5 17h14l-1.2-6H6.2L5 17Z" />
                  <path d="M7 11l1.5-4h7L17 11" />
                  <path d="M7 17v2M17 17v2" />
                  <circle cx="8" cy="16" r="1" />
                  <circle cx="16" cy="16" r="1" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                Local Gangtok Taxi
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Comfortable local taxi service for Gangtok sightseeing,
                shopping, hotel transfers and daily city travel.
              </p>

              <a
                href="#booking"
                className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 transition group-hover:text-blue-700"
              >
                Book Local Taxi
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* Bagdogra Airport Transfer */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-7 w-7"
                >
                  <path d="M3 13l7-2 4-7 2 1-2 7 7 3-1 2-7-2-3 4-2-1 1-4-5-1 1-2Z" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                Bagdogra Airport Transfer
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Reliable airport pickup and drop service between Bagdogra
                Airport and Gangtok with comfortable private vehicles.
              </p>

              <a
                href="#booking"
                className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 transition group-hover:text-blue-700"
              >
                Book Airport Taxi
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* NJP Railway Transfer */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-7 w-7"
                >
                  <rect x="5" y="3" width="14" height="15" rx="2" />
                  <path d="M8 18l-2 3M16 18l2 3M8 8h8M8 12h8" />
                  <circle cx="9" cy="15" r="1" />
                  <circle cx="15" cy="15" r="1" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                NJP Railway Transfer
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Convenient private taxi transfers between New Jalpaiguri
                Railway Station and Gangtok with dependable local drivers.
              </p>

              <a
                href="#booking"
                className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 transition group-hover:text-blue-700"
              >
                Book NJP Transfer
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* Sikkim Sightseeing */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-7 w-7"
                >
                  <path d="M3 20l6-9 4 5 3-4 5 8H3Z" />
                  <path d="M13 8l2-3 2 3" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                Sikkim Sightseeing
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Explore Gangtok and popular Sikkim destinations with
                comfortable vehicles and experienced local drivers.
              </p>

              <a
                href="#booking"
                className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 transition group-hover:text-blue-700"
              >
                Explore Sikkim
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* North Sikkim Tours */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-7 w-7"
                >
                  <path d="M3 20l6-10 4 5 3-7 5 12H3Z" />
                  <path d="M15 8h.01" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                North Sikkim Tours
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Travel to North Sikkim with reliable transportation,
                experienced drivers and vehicles suited for mountain routes.
              </p>

              <a
                href="#booking"
                className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 transition group-hover:text-blue-700"
              >
                Plan Your Trip
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* Darjeeling Trips */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-7 w-7"
                >
                  <path d="M3 20l5-8 4 4 4-7 5 11H3Z" />
                  <path d="M17 6v4M15 8h4" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                Darjeeling Trips
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Comfortable private taxi service for travel between Gangtok,
                Darjeeling, Bagdogra and nearby destinations.
              </p>

              <a
                href="#booking"
                className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 transition group-hover:text-blue-700"
              >
                Book Darjeeling Trip
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Popular Tours
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Explore Sikkim & Darjeeling
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Discover popular destinations across Sikkim and Darjeeling with
              comfortable vehicles, experienced local drivers and flexible
              private travel options.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Sikkim
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Gangtok Sightseeing
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Explore the highlights of Gangtok with a private taxi and a
                local driver familiar with the city's popular attractions.
              </p>
              <a
                href="#booking"
                className="mt-6 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Plan This Trip →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Sikkim
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Tsomgo Lake & Nathula Pass
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Plan a comfortable day trip from Gangtok to Tsomgo Lake and
                Nathula Pass, subject to local permits and route conditions.
              </p>
              <a
                href="#booking"
                className="mt-6 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Plan This Trip →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                North Sikkim
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                North Sikkim Tour
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Travel through the dramatic landscapes of North Sikkim with
                suitable vehicles and experienced mountain-route drivers.
              </p>
              <a
                href="#booking"
                className="mt-6 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Plan This Trip →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Darjeeling
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Darjeeling Sightseeing
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Enjoy private taxi travel around Darjeeling and its popular
                viewpoints and attractions.
              </p>
              <a
                href="#booking"
                className="mt-6 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Plan This Trip →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Sikkim
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Pelling & West Sikkim
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Explore West Sikkim with a private vehicle and build a journey
                around your preferred destinations and travel dates.
              </p>
              <a
                href="#booking"
                className="mt-6 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Plan This Trip →
              </a>
            </div>

            <div className="rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50 p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Custom Tour
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Create Your Own Itinerary
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Tell us your destinations, travel dates and group size. Our
                team can help you plan a suitable private taxi journey.
              </p>
              <a
                href="#booking"
                className="mt-6 inline-flex rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Request a Tour
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Fleet */}
      <Fleet />

      {/* Booking / Enquiry Section */}
      <section id="booking" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Enquiry
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Plan Your Journey With Us
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Share your travel requirements and our team will get back to
              you with suitable vehicle and travel options.
            </p>
          </div>

          {/* Enquiry Form */}
          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Phone / WhatsApp
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your WhatsApp number"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {/* Pickup */}
                <div>
                  <label
                    htmlFor="pickup"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Pickup Location
                  </label>

                  <input
                    id="pickup"
                    name="pickup"
                    type="text"
                    value={formData.pickup}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Bagdogra Airport / NJP / Gangtok"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {/* Destination */}
                <div>
                  <label
                    htmlFor="destination"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Destination
                  </label>

                  <input
                    id="destination"
                    name="destination"
                    type="text"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Gangtok / Darjeeling / North Sikkim"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {/* Travel Date */}
                <div>
                  <label
                    htmlFor="travelDate"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Travel Date
                  </label>

                  <input
                    id="travelDate"
                    name="travelDate"
                    type="date"
                    value={formData.travelDate}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {/* Adults */}
                <div>
                  <label
                    htmlFor="adults"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Adults
                  </label>

                  <select
                    id="adults"
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="">Select adults</option>
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults</option>
                    <option value="5">5 Adults</option>
                    <option value="6">6 Adults</option>
                    <option value="7">7 Adults</option>
                    <option value="8+">8+ Adults</option>
                  </select>
                </div>

                {/* Children */}
                <div>
                  <label
                    htmlFor="children"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Children
                  </label>

                  <select
                    id="children"
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="">Select children</option>
                    <option value="0">0 Children</option>
                    <option value="1">1 Child</option>
                    <option value="2">2 Children</option>
                    <option value="3">3 Children</option>
                    <option value="4">4 Children</option>
                    <option value="5+">5+ Children</option>
                  </select>
                </div>

                {/* Child Age(s) */}
                <div>
                  <label
                    htmlFor="childAges"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Child Age(s)
                  </label>

                  <input
                    id="childAges"
                    name="childAges"
                    type="text"
                    value={formData.childAges}
                    onChange={handleChange}
                    placeholder="e.g. 4, 7"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {/* Vehicle */}
                <div>
                  <label
                    htmlFor="vehicle"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Vehicle Preference
                  </label>

                  <select
                    id="vehicle"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="">No preference</option>
                    <option value="WagonR or Similar">
                      WagonR or Similar
                    </option>
                    <option value="Swift Dzire or Similar">
                      Swift Dzire or Similar
                    </option>
                    <option value="Innova / Xylo / Scorpio-N">
                      Innova / Xylo / Scorpio-N
                    </option>
                    <option value="Innova Crysta">Innova Crysta</option>
                    <option value="Bolero / Sumo">Bolero / Sumo</option>
                    <option value="Tempo Traveller">
                      Tempo Traveller
                    </option>
                    <option value="Bus">Bus</option>
                  </select>
                </div>

                {/* Trip Type */}
                <div>
                  <label
                    htmlFor="tripType"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Trip Type
                  </label>

                  <select
                    id="tripType"
                    name="tripType"
                    value={formData.tripType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="">Select trip type</option>
                    <option value="One Way">One Way</option>
                    <option value="Round Trip">Round Trip</option>
                    <option value="Local Sightseeing">
                      Local Sightseeing
                    </option>
                    <option value="Multi Day Tour">Multi-Day Tour</option>
                    <option value="Airport Transfer">
                      Airport Transfer
                    </option>
                    <option value="Railway Transfer">
                      Railway Transfer
                    </option>
                  </select>
                </div>

                {/* Requirement */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="requirement"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Additional Requirement
                  </label>

                  <textarea
                    id="requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us anything else about your trip, sightseeing plan, hotel, return journey or special requirement."
                    className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Submitting Enquiry..." : "Submit Enquiry"}
                </button>
              </div>

              {/* Message */}
              {message && (
                <div
                  className={`mt-5 rounded-xl border px-4 py-4 text-sm leading-6 ${
                    message.startsWith("Thank you")
                      ? "border-green-200 bg-green-50 text-green-700"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}