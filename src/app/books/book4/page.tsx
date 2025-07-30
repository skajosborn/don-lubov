import Image from "next/image";

export default function Book4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-purple-400 to-violet-600 rounded-lg shadow-2xl p-8 w-80 h-96 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-8xl mb-4">🌸</div>
                <h2 className="text-2xl font-bold mb-2">The Silent Garden</h2>
                <p className="text-sm opacity-90">Book Cover</p>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">The Silent Garden</h1>
            <p className="text-2xl font-semibold text-violet-600">$18.99</p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Synopsis</h3>
              <p className="text-gray-700 leading-relaxed">
                A haunting mystery set in a forgotten Japanese garden. When 
                landscape architect Emma discovers a hidden garden that seems 
                to exist outside of time, she uncovers a century-old secret 
                that connects her family to a tragic love story.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Key Features</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 320 pages of atmospheric mystery</li>
                <li>• Rich cultural and historical detail</li>
                <li>• Dual timeline narrative</li>
                <li>• Beautiful descriptions of gardens and nature</li>
                <li>• Perfect for fans of Kate Morton and Susanna Kearsley</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Reviews</h3>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-700 italic">
                  "A beautifully crafted mystery that weaves together past and present. 
                  Lubov's descriptions of the garden are so vivid, you can almost 
                  smell the cherry blossoms." - Historical Fiction Review
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Buy Now - $18.99
              </button>
              <button className="border border-violet-600 text-violet-600 hover:bg-violet-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Read Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 