import { Header } from "@/components/header";
import Image from "next/image";

const teamMembers = [
  {
    name: "Meziane Abdelmoumen",

    image: "/moumen.jpg",
  },
  {
    name: "Chetouhi Saliha Ikram ",

    image: "/ikram.jpg",
  },
  {
    name: "Graoua Abdeljalil ",

    image: "/user.png",
  },
  {
    name: "Nadjem Yacine ",

    image: "/yacin.jpg",
  },
  {
    name: " Mr T.Kritter , Mme Meddour ",
    role: "Encadree",
    image: "/user.png",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#f5f8f5] bg-dot-pattern">
      <Header currentPage={4} />

      <main className="max-w-7xl mx-auto p-4 sm:p-6 space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">About Us</h1>

        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
          <p className="text-gray-700 mb-4">
            Our team worked collaboratively on the &quot;Amenagement du caree
            vert&quot; project, bringing together expertise in architecture,
            urban planning, landscape design, and environmental analysis. This
            interdisciplinary approach allowed us to create a comprehensive and
            sustainable solution for the green space.
          </p>
          <p className="text-gray-700">
            We conducted thorough technical and sociological analyses, created
            detailed graphical representations, and proposed improvements based
            on user feedback. Our goal was to create a vibrant, functional, and
            environmentally friendly space that serves the needs of the
            community.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-semibold mb-6">Our Approach</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Conducted comprehensive site analysis</li>
            <li>Gathered and analyzed user feedback</li>
            <li>Developed sustainable design solutions</li>
            <li>Created detailed 3D renderings and conceptual diagrams</li>
            <li>Proposed improvements for increased comfort and usability</li>
            <li>
              Focused on enhancing green spaces and environmental sustainability
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
