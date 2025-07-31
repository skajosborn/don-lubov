import Image from "next/image";
import BookGallery from "../../components/BookGallery";

export default function Book3Page() {
  return (
    <div className="min-h-screen pt-20 relative">
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 w-full h-full z-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: "url('/zen3.jpg')",
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
              mainImage="/book5.png"
              mainImageAlt="Long Island Zen Book Cover"
              title="Long Island Zen"
              subtitle="Zen, Spirituality and Enlightenment"
              author="Don Lubov"
              thumbnails={[
                {
                  src: "/book5.png",
                  alt: "Book Cover",
                  label: "Cover"
                },

              ]}
            />
          </div>

          {/* Book Details */}
          <div className="space-y-6 lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900">Long Island Zen</h1>
            <p className="text-2xl font-semibold text-[#5e7d6a]">$9.99</p>
            
            <div className="space-y-4 bg-white/80 rounded-lg p-8">
              <h3 className="text-md font-semibold text-gray-900">Synopsis</h3>
              <p className="text-gray-700 leading-relaxed">
              Long Island Zen combines (100) regional drawings with a universal message to aid us in our destined goal of self-discovery. 
              It offers insights that give purpose to life. Zen points the way to self discovery...to uncover one's true nature. 
              Long Island is the place of my discoveries and my drawings.

              </p>
            </div>

            <div className="space-y-4 bg-white/80 rounded-lg p-8">
              <h3 className="text-md font-semibold text-gray-900">Key Features</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 420 pages of magical realism</li>
                <li>• Deep environmental themes</li>
                <li>• Spiritual and philosophical elements</li>
                <li>• Rich character development</li>
                <li>• Perfect for fans of Paulo Coelho and Barbara Kingsolver</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-md font-semibold text-gray-900">Reviews</h3>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-700 italic">
                  "A beautiful meditation on our relationship with nature. 
                  Lubov's prose flows like a gentle stream, carrying readers 
                  into a world where magic and reality intertwine." - Nature Journal
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-[#5e7d6a] text-white hover:bg-gray-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Buy it Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 