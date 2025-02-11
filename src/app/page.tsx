import Image from "next/image";
import { BarChart } from "@/components/charts";
import { Header } from "@/components/header";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f5f8f5] bg-dot-pattern">
      <Header currentPage={1} />

      <main className="max-w-7xl mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Sheet Section */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Fiche thechnique</h2>
            <div className="space-y-4">
              <div className="relative h-[300px] bg-[#e8f0e8] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.123456789012!2d3.1544373!3d36.7197667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e526a11bfde89%3A0x7e91d6bb3e37a076!2z2KfZhNmF2K_Ysdiz2Kkg2KfZhNmF2KrYudiv2K_YqSDYp9mE2KrZgtmG2YrYp9iqINmE2YTZh9mG2K_Ys9ipINin2YTZhdi52YXYp9ix2KjYqSDZiNin2YTYudmF2LHYp9mG!5e0!3m2!1sen!2s!4v1234567890123"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Google Map Location"
                ></iframe>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold">Surface:</p>
                  <p>732.47m²</p>
                </div>
                <div>
                  <p className="font-semibold">Largeur:</p>
                  <p>29.71m</p>
                </div>
              </div>
            </div>
          </section>

          {/* Climate Analysis Section */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Analyse climatique</h2>
            <div className="space-y-6">
              <div className="h-[200px]">
                <BarChart
                  data={[
                    { month: "Jan", value: 30 },
                    { month: "Feb", value: 45 },
                    { month: "Mar", value: 55 },
                    { month: "Apr", value: 40 },
                    { month: "May", value: 35 },
                    { month: "Jun", value: 25 },
                  ]}
                />
              </div>
              <div className="bg-[#e8f0e8] rounded-lg p-4">
                <p className="text-sm">
                  Le climat: méditerranéen caractérisé par des étés chauds et
                  secs et des hivers doux et pluvieux
                </p>
                <p className="text-sm mt-2">
                  Moyenne des précipitations annuelles: 600mm
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Site Analysis Map */}
        <section className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Plan du site</h2>
          <div className="relative w-full h-64 md:h-80 lg:h-[310px] bg-[#e8f0e8] rounded-lg overflow-hidden">
            <div className="absolute inset-0 p-2 md:p-4">
              <div className="border-2 border-dashed border-gray-400 h-full rounded-lg">
                <Image
                  src="/3dsite.png"
                  alt="Detailed site analysis"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
