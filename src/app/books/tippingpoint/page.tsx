import Image from "next/image";
import BookGallery from "../../components/BookGallery";

export default function Book9Page() {
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
              mainImage="/tippingpoint.png"
              mainImageAlt="The Tipping Point: Civilization's Near Self-Destruction Cover"
              title="The Tipping Point"
              subtitle="Science Fiction"
              author="Don Lubov"
              thumbnails={[
                {
                  src: "/tippingpoint.png",
                  alt: "Book Cover",
                  label: "Cover"
                },
                {
                  src: "/tippingpointback.png",
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
            <h1 className="text-4xl font-bold text-gray-900">The Tipping Point: Civilization's Near Self-Destruction</h1>
            <p className="text-2xl font-semibold text-[#5e7d6a]">$9.99</p>
            
            <div className="space-y-4 bg-white/80 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900">Synopsis</h3>
              <p className="text-gray-700 leading-relaxed">
              The year is 2040. Service robots have been safely and efficiently introduced into society. They are an integral part of our world when a pandemic of global proportions arrives. Isolated deaths keep cropping up. Seeming random at first, an unsettling pattern begins to emerge. Linda Miller, an investigative reporter, pounces on the story. As she explores her city, she finds death at every turn. Her investigation leads to interviews with experts in various fields. Everyone is mystified. People are understandably panicky. The deaths go global. The world is in chaos.

            Through her investigations, Linda learns that the cause of the plague is anger. This plague knows who is angry and wants them. Death is swift and thorough. 3-billion people die in 6 weeks. Pogo was right when he said: ”We have seen the enemy and he is us.” As mysteriously and abruptly as it began, the plague stops.

            Linda’s investigation turns from the cause of the pandemic to its unexpected aftermath. How to live in a world without anger is a daily awakening to new strategies. An anger-free world has significant and startling effects on our society. Have the meek finally inherited the earth? The world enters uncharted waters. How will we live? Why will we live? What is the meaning of life now?

            Fast-forward to the year 2133. Several generations have lived in a world without anger. What is that world like and why do they celebrate it? Still, something seems amiss. Behind the scenes, some unsettling events have been taking place. Society has not been the paradise publicly endorsed. Can we live with not knowing both sides of the anger coin? We have to learn to live perfectly in an imperfect world, or we will fail to evolve. Human species that fail to evolve, become extinct.</p>
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