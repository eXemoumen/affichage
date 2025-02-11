import { Header } from "@/components/header";
import Image from "next/image";

export default function DossierGraphique() {
  return (
    <div className="min-h-screen bg-[#f5f8f5] bg-dot-pattern">
      <Header currentPage={3} />

      <main className="max-w-7xl mx-auto p-4 sm:p-6 space-y-4 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          Dossier Graphique
        </h1>

        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
            Vue d&apos;ensemble du projet    
          </h2>
          <div className="relative h-[300px] sm:h-[400px] bg-[#e8f0e8] rounded-lg overflow-hidden">
            <Image
              src="/carevert.jpg"
              alt="Vue d'ensemble du projet"
              fill
              className="object-contain"
            />
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
           Plan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative h-[200px] bg-[#e8f0e8] rounded-lg overflow-hidden">
              <Image
                src="/plan.png"
                alt="Détail architectural 1"
                fill
                className="object-cover"
              />
            </div>
         
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
            Rendus 3D
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative h-[150px] sm:h-[200px] bg-[#e8f0e8] rounded-lg overflow-hidden">
              <Image
                src="/rendu.png"
                alt="Rendu 3D 1"
                fill
                className="object-cover"
              />
            </div>
            {/* <div className="relative h-[150px] sm:h-[200px] bg-[#e8f0e8] rounded-lg overflow-hidden">
              <Image
                src="/"
                alt="Rendu 3D 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[150px] sm:h-[200px] bg-[#e8f0e8] rounded-lg overflow-hidden">
              <Image
                src="/"
                alt="Rendu 3D 3"
                fill
                className="object-cover"
              />
            </div> */}
          </div>
        </section>

        {/* <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
            Schémas conceptuels
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative h-[200px] bg-[#e8f0e8] rounded-lg overflow-hidden">
              <Image
                src="/"
                alt="Schéma conceptuel 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-[200px] bg-[#e8f0e8] rounded-lg overflow-hidden">
              <Image
                src="/"
                alt="Schéma conceptuel 2"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
