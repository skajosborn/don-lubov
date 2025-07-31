import Image from "next/image";
import BookGallery from "../../components/BookGallery";

export default function Book1Page() {
  return (
    <div className="min-h-screen pt-20 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full z-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: "url('/zen28.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Book Gallery */}
          <div className="flex pt-40 lg:col-span-1">
            <BookGallery
              mainImage="/book6.png"
              mainImageAlt="Six Step Path to Enlightenment Book Cover"
              title="The Six Step Path to Enlightenment"
              subtitle="Zen, Spirituality and Enlightenment"
              author="Don Lubov"
              thumbnails={[
                {
                  src: "/book6.png",
                  alt: "Book Cover",
                  label: "Cover"
                }
              ]}
            />
          </div>

          {/* Book Details */}
          <div className="space-y-6 lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900">The Six Step Path to Enlightenment</h1>
            <p className="text-2xl font-semibold text-[#5e7d6a]">$9.99</p>
            
            <div className="space-y-4 bg-white/80 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900">Synopsis</h3>
              <p className="text-gray-700 leading-relaxed">
              This book, and the lessons within, come from a spiritual awakening I had in 1971, at the age of 30. This guide was refined by me, over 30 years, and I taught its lessons to 2,000 people. </p>
              <p>Unlike many, worthy, meditative paths to enlightenment, my “Six-Step Path” has no ritual or ceremony.

              It teaches you how to turn your life into your meditation. You learn to accept things as they are, and be fully focused on your present moment. This acceptance of yourself and others, as imperfect, but no less worthy beings on a journey within, leads to unconditional love and inner peace. </p>
              <p>It guides you to make conscious contact with the non-physical presence within all of us. It encourages you to find your natural gifts and talents, and to use them to the best of your abilities. You learn to follow your heart, rather than your head. </p>
              <p>In six, user-friendly steps, your life becomes your meditation – informal, spontaneous, and creative. It encourages you to find your natural gifts and talents and to use them to the best of your abilities. You become the best you you can be. You learn to live the life you would live following a spiritual awakening. </p>
              <p>You learn that all you have to do is ‘know yourself, and practice the ‘golden rule’. </p>
              <p>You realize you are part of something greater than yourself. </p>

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
              <button className="bg-[#575755ef]zx hover:bg-teal-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer">
                Buy Now - $9.99
              </button>
              <button className="border bg-[#5e7d6a] text-white hover:bg-gray-300 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer">
                Buy it Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 