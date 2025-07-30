import Image from "next/image";
import BookGallery from "../../components/BookGallery";

export default function Book1Page() {
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
              mainImage="/book8.png"
              mainImageAlt="Memoirs of a Boomer Book Cover"
              title="Memoirs of a Boomer"
              subtitle="Zen, Spirituality and Enlightenment"
              author="Don Lubov"
              thumbnails={[
                {
                  src: "/book8.png",
                  alt: "Book Cover",
                  label: "Cover"
                },
                {
                  src: "/book3-page1.jpg",
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
            <h1 className="text-4xl font-bold text-gray-900">Memoirs of a Boomer</h1>
            <p className="text-2xl font-semibold text-teal-600">$9.99</p>
            
            <div className="space-y-4 bg-white/80 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900">Synopsis</h3>
              <p className="text-gray-700 leading-relaxed">
              Memoirs of a Boomer is an action/adventure/travel memoir...an Indiana Jones meers Alan Watts. In the summer of 1971, a lone backpacker treks, solo, across the U.S., with a side trip to Acapulco, Mexico. 
              He encounters Bucky Fuller, a rock festival, a lynching, Mexican drug dealers, brutal heat and terrain, a spiritual enlightenment, near death in the wilderness and a ride with a Hells Angel. 
              Years of exploring communes leads to a stint teaching New Age architecture at Stanford university. After four years and 4,500 miles, he leaves California for a return to the East Coast.
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
              <button className="bg-black hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer">
                Buy Now - $9.99
              </button>
              <button className="border bg-white/40 text-gray-800 hover:bg-gray-300 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer">
                Read Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 