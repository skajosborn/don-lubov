import Image from "next/image";

export default function Book1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg shadow-2xl p-8 w-80 h-96 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-8xl mb-4">📚</div>
                <h2 className="text-2xl font-bold mb-2">The Lost Chronicles</h2>
                <p className="text-sm opacity-90">Book Cover</p>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">The Lost Chronicles</h1>
            <p className="text-2xl font-semibold text-indigo-600">$19.99</p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Synopsis</h3>
              <p className="text-gray-700 leading-relaxed">
                A thrilling adventure through ancient ruins and forgotten civilizations. 
                When archaeologist Dr. Sarah Chen discovers a mysterious map in a 
                crumbling temple, she embarks on a journey that will change everything 
                she thought she knew about human history.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Key Features</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 350 pages of gripping adventure</li>
                <li>• Rich historical detail and research</li>
                <li>• Complex characters and relationships</li>
                <li>• Multiple plot twists and revelations</li>
                <li>• Perfect for fans of Indiana Jones and Dan Brown</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Reviews</h3>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-700 italic">
                  "A masterful blend of archaeology, mystery, and human drama. 
                  Don Lubov has created a world that feels both ancient and 
                  incredibly relevant to our times." - Literary Review
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Buy Now - $19.99
              </button>
              <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Read Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 