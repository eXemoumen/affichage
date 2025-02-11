"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { StarIcon } from "@heroicons/react/20/solid";

const aspects = [
  { name: "Design", description: "Overall aesthetic and visual appeal" },
  {
    name: "Functionality",
    description: "How well the space serves its intended purpose",
  },
  {
    name: "Sustainability",
    description: "Environmental considerations and green features",
  },
  { name: "Accessibility", description: "Ease of use for all individuals" },
  {
    name: "Innovation",
    description: "Unique or creative solutions implemented",
  },
];

export default function RateProject() {
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});
  const [comment, setComment] = useState("");

  const calculateAverageRating = () => {
    const totalRatings = Object.values(ratings).reduce((acc, rating) => acc + rating, 0);
    const numberOfRatings = Object.keys(ratings).length;
    return numberOfRatings > 0 ? (totalRatings / numberOfRatings).toFixed(1) : 0;
  };

  const handleRating = (aspect: string, rating: number) => {
    setRatings((prev) => ({ ...prev, [aspect]: rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Ratings:", ratings);
    console.log("Comment:", comment);
    // Store ratings and comment in local storage
    localStorage.setItem('projectFeedback', JSON.stringify({ ratings, comment }));
    alert("Thank you for your feedback!");
  };

  return (
    <div className="min-h-screen bg-[#f5f8f5] bg-dot-pattern">
      <Header currentPage={6} />

      <main className="max-w-4xl mx-auto p-4 sm:p-6 space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Rate the Project
        </h1>
        
        <h2 className="text-xl text-center">
          Average Rating: {calculateAverageRating()}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl font-semibold mb-4">Project Aspects</h2>
            <div className="space-y-4">
              {aspects.map((aspect) => (
                <div
                  key={aspect.name}
                  className="border-b border-gray-200 pb-4"
                >
                  <h3 className="text-lg font-medium">{aspect.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {aspect.description}
                  </p>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        className={`h-8 w-8 flex-shrink-0 cursor-pointer ${
                          (ratings[aspect.name] || 0) >= star
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        onClick={() => handleRating(aspect.name, star)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl font-semibold mb-4">Additional Comments</h2>
            <textarea
              className="w-full h-32 p-2 border border-gray-300 rounded-md"
              placeholder="Please share any additional thoughts or suggestions..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </section>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-[#2c4a2c] text-white rounded-md hover:bg-[#88ab75] transition-colors"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
