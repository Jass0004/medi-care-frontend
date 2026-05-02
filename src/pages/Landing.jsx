import { Heart, ShieldCheck, Truck, Users } from "lucide-react";

export default function Landing() {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-500 to-cyan-500 text-white py-24 px-6 text-center">

        <div className="relative z-10 max-w-3xl mx-auto">

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Donate Medicines <br />
            <span className="text-yellow-300">Save Lives 💙</span>
          </h1>

          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            A platform that connects unused medicines with people who truly need them.
            Reduce waste and create real impact in society.
          </p>

          {/* Glass Card */}
          <div className="mt-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg">
            <p className="text-sm md:text-base">
              💡 “Small help can make a big difference in someone's life.”
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">
          About Our Mission
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Many people cannot afford essential medicines, while others have unused
          medicines at home. Our platform bridges this gap by collecting unused,
          safe medicines and delivering them to those who need them the most.
          We aim to reduce medicine waste and support communities in need.
        </p>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-blue-600">
          What We Provide
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Heart className="mx-auto text-blue-600" size={40} />
            <h3 className="font-semibold mt-4">Helping People</h3>
            <p className="text-sm mt-2">
              Supporting those who cannot afford medicines.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <ShieldCheck className="mx-auto text-blue-600" size={40} />
            <h3 className="font-semibold mt-4">Safety First</h3>
            <p className="text-sm mt-2">
              Medicines are verified before distribution.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Truck className="mx-auto text-blue-600" size={40} />
            <h3 className="font-semibold mt-4">Fast Distribution</h3>
            <p className="text-sm mt-2">
              Quick delivery to people in need.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Users className="mx-auto text-blue-600" size={40} />
            <h3 className="font-semibold mt-4">Community Support</h3>
            <p className="text-sm mt-2">
              Built with the help of caring individuals.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-blue-600">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">1. Collection</h3>
            <p className="text-sm mt-2">
              Unused medicines are collected from donors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">2. Verification</h3>
            <p className="text-sm mt-2">
              Medicines are checked for quality and expiry.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">3. Distribution</h3>
            <p className="text-sm mt-2">
              Medicines are delivered to those in need.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>© 2026 MediWithMERN | Developed by Jaswinder Singh</p>
      </footer>

    </div>
  );
}