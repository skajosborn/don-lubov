import Image from "next/image";
import BookGallery from "../../components/BookGallery";

export default function Book14Page() {
  return (
    <div className="min-h-screen pt-20 relative">
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 w-full h-full z-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: "url('/zen15.jpg')",
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
              mainImage="/thesidejob.png"
              mainImageAlt="The Side Job Cover"
              title="The Side Job"
              subtitle="Creative Writing"
              author="Don Lubov"
              thumbnails={[
                {
                  src: "/thesidejob.png",
                  alt: "Book Cover",
                  label: "Cover"
                },
                {
                  src: "/sidejobback.png",
                  alt: "Page 1",
                  label: "Page 1"
                },
                {
                  src: "/book3-page2.jpg",
                  alt: "Page 2",
                  label: "Page 2"
                }
              ]}
            />
          </div>

          {/* Book Details */}
          <div className="space-y-6 lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900">The Side Job</h1>
            <p className="text-2xl font-semibold text-[#5e7d6a]">$9.99</p>
            
            <div className="space-y-4 bg-white/80 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900">Synopsis</h3>
              <p className="text-gray-700 leading-relaxed">
              This is the story of Maggie Gomez — an unwed, unskilled mother of a sickly daughter. 
              She lives a hardscrabble life on the underside of Las Vegas. 
              As her daughter’s health deteriorates, Maggie's need for money for an operation skyrockets. 
              Maggie was vulnerable and defeated early in life. 
              Her long-suppressed strength blossoms and Maggie becomes “La Femme Nikita”. 
              As Maggie gets more involved with her loan shark boss and his crew, her world begins to spiral out of control. 
              Her simultaneous involvement with a gangster and the detective investigating him turns her life into a soap opera of emotions. 
              She must figure out how to escape her underworld life, protect her daughter, and live happily ever after.</p>
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
              <button className="bg-[#5e7d6a] text-white hover:bg-gray-600 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer">
                Read Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 