import Link from "next/link";

interface HeaderProps {
  currentPage: number;
}

export function Header({ currentPage }: HeaderProps) {
  return (
    <header className="bg-[#2c4a2c] text-white p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-0">
            <h1 className="text-xl sm:text-2xl font-bold">EPAU</h1>
            <div className="h-6 sm:h-8 w-px bg-white/20" />
            <h2 className="text-lg sm:text-xl">Amenagement du caree vert</h2>
          </div>
          <nav className="flex flex-wrap gap-2 sm:gap-4">
            <Link
              href="/"
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base transition ${
                currentPage === 1 ? "bg-white/20" : "hover:bg-white/10"
              }`}
            >
              Analyse Technique
            </Link>
            <Link
              href="/analyse-sociologique"
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base transition ${
                currentPage === 2 ? "bg-white/20" : "hover:bg-white/10"
              }`}
            >
              Analyse Sociologique
            </Link>
            <Link
              href="/dossier-graphique"
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base transition ${
                currentPage === 3 ? "bg-white/20" : "hover:bg-white/10"
              }`}
            >
              Dossier Graphique
            </Link>
            <Link
              href="/about-us"
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base transition ${
                currentPage === 4 ? "bg-white/20" : "hover:bg-white/10"
              }`}
            >
              About Us
            </Link>
        
            <Link
              href="/rate-project"
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base transition ${
                currentPage === 6 ? "bg-white/20" : "hover:bg-white/10"
              }`}
            >
              Rate Project
            </Link>
          </nav>
        </div>
        <p className="text-xs sm:text-sm mt-2 text-center">
          Thematique 3 de la semaine transversal
        </p>
      </div>
    </header>
  );
}
