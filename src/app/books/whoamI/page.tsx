import Image from "next/image";
import BookGallery from "../../components/BookGallery";

export default function Book1Page() {
  return (
    <div className="min-h-screen pt-20 relative">
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 w-full h-full z-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: "url('/zen24.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Book Gallery */}
          <div className="flex pt-40 lg:col-span-1">
            <BookGallery
              mainImage="/book3.png"
              mainImageAlt="Who Am I and Why Am I Here? Book Cover"
              title="Who Am I and Why Am I Here?"
              subtitle="Zen, Spirituality and Enlightenment"
              author="Don Lubov"
              thumbnails={[
                {
                  src: "/book3.png",
                  alt: "Book Cover",
                  label: "Cover"
                }
              ]}
            />
          </div>

          {/* Book Details */}
          <div className="space-y-6 lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900">Who Am I and Why Am I Here?</h1>
            <p className="text-2xl font-semibold text-[#5e7d6a]">$9.99</p>
            
            <div className="space-y-4 bg-white/80 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900">Synopsis</h3>
              <p className="text-gray-700 leading-relaxed">
              "Who Am I and Why Am I Here?" -- Zen, Spirituality and Enlightenment is Don's Zen text. It is a guidebook tailored to the new-comer to things spiritual. It is written for those new to the search for their spiritual roots. It provides answers to 26 frequently-asked questions on spirituality. In a series of discourses Zen's power to help you focus on the present and reach your potential as a human being is highlighted. You are encouraged to be the best you can be. Peace replaces conflict. the need to judge diminishes and the ego gives way to love and compassion. Zen means meditation, which becomes a natural, informal part of your daily routine. This leads to living spontaneously, in the present...an atmosphere that encourages transcendence and enlightenment. It is time to realize that we willingly enrolled in this "school of hard knocks" in the world of duality and to awaken as to how to graduate from school. "Who Am I and Why Am I Here?" is here to help.

              </p>
            </div>

            <div className="space-y-4 bg-white/80 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900">Key Features</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 420 pages of magical realism</li>
                <li>• Deep environmental themes</li>
                <li>• Spiritual and philosophical elements</li>
                <li>• Rich character development</li>
                <li>• Perfect for fans of Paulo Coelho and Barbara Kingsolver</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Reviews</h3>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-700 italic">
                  "A beautiful meditation on our relationship with nature. 
                  Lubov's prose flows like a gentle stream, carrying readers 
                  into a world where magic and reality intertwine." - Nature Journal
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="border bg-[#5e7d6a] text-white hover:bg-gray-600 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer">
                Buy it Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 