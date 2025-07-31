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
              mainImage="/book1.png"
              mainImageAlt="Life's Purpose Book Cover"
              title="Life's Purpose"
              subtitle="From Stress to Enlightenment"
              author="Don Lubov"
              thumbnails={[
                {
                  src: "/book1.png",
                  alt: "Book Cover",
                  label: "Cover"
                }
              ]}
            />
          </div>

          {/* Book Details */}
          <div className="space-y-6 lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900">Life's Purpose - From Stress to Enlightenment</h1>
            <p className="text-2xl font-semibold text-[#5e7d6a]">$9.99</p>
            
            <div className="space-y-4 bg-white/80 rounded-lg p-8">
              <h3 className="text-md font-semibold text-gray-900">Synopsis</h3>
              <p className="text-gray-700 leading-relaxed">
              This book is your introduction to spirituality...a user-friendly guide to end suffering. End stress forever. Become the best you you can be. Learn to live in the moment. 
              Find purpose in your life and a conscious connection to your Source. Live a life of peace, love and joy by following my "Six-Step Path" to enlightenment.

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
              <a
                href="https://a.co/d/2NJO397"
                target="_blank"
                rel="noopener noreferrer"
                className="border bg-[#5e7d6a] text-white hover:bg-gray-300 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer text-center inline-block"
              >
                Buy it Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 