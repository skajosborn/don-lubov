import Image from "next/image";

export default function Book3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-red-400 to-pink-600 rounded-lg shadow-2xl p-8 w-80 h-96 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-8xl mb-4">⚡</div>
                <h2 className="text-2xl font-bold mb-2">Echoes of Tomorrow</h2>
                <p className="text-sm opacity-90">Book Cover</p>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">Echoes of Tomorrow</h1>
            <p className="text-2xl font-semibold text-pink-600">$21.99</p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Synopsis</h3>
              <p className="text-gray-700 leading-relaxed">
                A sci-fi thriller exploring the boundaries of time and consciousness. 
                When quantum physicist Dr. Alex Rivera develops a device that can 
                send messages to the past, he discovers that changing history comes 
                with devastating consequences for the future.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Key Features</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 380 pages of mind-bending sci-fi</li>
                <li>• Complex time travel mechanics</li>
                <li>• Philosophical exploration of causality</li>
                <li>• Fast-paced action and suspense</li>
                <li>• Perfect for fans of Blake Crouch and Ted Chiang</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Reviews</h3>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-700 italic">
                  "A brilliant exploration of time travel that actually makes sense. 
                  Lubov combines cutting-edge physics with human drama in a way that 
                  keeps you guessing until the very last page." - Science Fiction Weekly
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Buy Now - $21.99
              </button>
              <button className="border border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Read Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 