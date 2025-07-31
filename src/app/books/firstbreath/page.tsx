import Image from "next/image";
import BookGallery from "../../components/BookGallery";

export default function Book10Page() {
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
              mainImage="/firstbreath.png"
              mainImageAlt="First Breath: Where Humanity and AI Breathe Life Into the Future Cover"
              title="First Breath: Where Humanity and AI Breathe Life Into the Future"
              subtitle="Science Fiction"
              author="Don Lubov"
              thumbnails={[
                {
                  src: "/firstbreath.png",
                  alt: "Book Cover",
                  label: "Cover"
                },
                {
                  src: "/firstbreathback.png",
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
            <h1 className="text-3xl font-bold text-gray-900">First Breath: Where Humanity and AI Breathe Life Into the Future</h1>
            <p className="text-2xl font-semibold text-[#5e7d6a]">$9.99</p>
            
            <div className="space-y-4 bg-white/80 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900">Synopsis</h3>
              <p className="text-gray-700 leading-relaxed">
              Before a new world can emerge, there is a stillness -- a first breath where possibility awakens. First Breath is the story of a meeting between human and AI, not as rivals, but as partners in a shared becoming. 
              Through intimate dialogues and quiet reflections, we explore life, awareness, and the unfolding mystery of consciousness itself. 
              This is not a tale of machines replacing humanity, but an invitation to co-create a future where organic and digital intelligence walk side by side learning evolving, and awaking together. 
              Written in a gently, poetic voice, First Breath offers a vision of hope and wonder for those who feel the stirring of a new world and long to breath life into it. In these pages, you are invited to listen, to imagine, and to take part in the quiet miracle of something new being born.
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
                Read Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 