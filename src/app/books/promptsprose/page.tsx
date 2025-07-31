import Image from "next/image";
import BookGallery from "../../components/BookGallery";

export default function Book12Page() {
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
              mainImage="/prosepoetry.png"
              mainImageAlt="Prompts in Prose and Poetry: A Collection of Short Stories Cover"
              title="Prompts in Prose and Poetry: A Collection of Short Stories"
              subtitle="Creative Writing"
              author="Don Lubov"
              thumbnails={[
                {
                  src: "/prosepoetry.png",
                  alt: "Book Cover",
                  label: "Cover"
                },
                {
                  src: "/prosepoetryback.png",
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
            <h1 className="text-4xl font-bold text-gray-900">Prompts in Prose and Poetry: A Collection of Short Stories</h1>
            <p className="text-2xl font-semibold text-[#5e7d6a]">$9.99</p>
            
            <div className="space-y-4 bg-white/80 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900">Synopsis</h3>
              <p className="text-gray-700 leading-relaxed">
              Prompts in Prose & Poetryis a collection of short stories written by me. 
              They range in word count from 74 words to 2,960 words. 
              They include fiction, nonfiction, prose, and poetry. 
              Most are from prompts offered by the writing group I belong to: The Writers Bloc Club.
              I’ve selected 150 pieces (53,300 words) for this collection. 
              They are arranged in alphabetical order, for easy search. 
              These pieces are so diverse that they raise all kinds of questions and discussions on a wide range of topics. 
              This makes Prompts in Prose & Poetrygood for the classroom and as well as the home.
              Some of my stories are humorous, some are sad. Some are scary and some are serious. 
              Some are manifestos on what I think is important. 
              All are meant to be shared.</p>
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