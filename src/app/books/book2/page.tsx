import Image from "next/image";

export default function Book2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-green-400 to-teal-600 rounded-lg shadow-2xl p-8 w-80 h-96 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-8xl mb-4">🌿</div>
                <h2 className="text-2xl font-bold mb-2">Whisper of the Wind</h2>
                <p className="text-sm opacity-90">Book Cover</p>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">Whisper of the Wind</h1>
            <p className="text-2xl font-semibold text-teal-600">$24.99</p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Synopsis</h3>
              <p className="text-gray-700 leading-relaxed">
                A mystical journey into the heart of nature and human connection. 
                When environmental scientist Maya discovers she can communicate 
                with the natural world, she must choose between her career and 
                protecting the ancient forest that speaks to her soul.
              </p>
            </div>

            <div className="space-y-4">
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
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Buy Now - $24.99
              </button>
              <button className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Read Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 