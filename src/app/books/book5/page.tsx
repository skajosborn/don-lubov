import Image from "next/image";

export default function Book5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-amber-400 to-orange-600 rounded-lg shadow-2xl p-8 w-80 h-96 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-8xl mb-4">🏮</div>
                <h2 className="text-2xl font-bold mb-2">The Last Lighthouse</h2>
                <p className="text-sm opacity-90">Book Cover</p>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">The Last Lighthouse</h1>
            <p className="text-2xl font-semibold text-orange-600">$22.99</p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Synopsis</h3>
              <p className="text-gray-700 leading-relaxed">
                A gripping survival story set on a remote island during a devastating 
                storm. When lighthouse keeper Thomas finds himself trapped with a 
                mysterious stranger, he must confront both the elements and the 
                secrets that brought them together.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Key Features</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 400 pages of intense survival drama</li>
                <li>• Atmospheric coastal setting</li>
                <li>• Psychological thriller elements</li>
                <li>• Deep character exploration</li>
                <li>• Perfect for fans of Stephen King and John Grisham</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Reviews</h3>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-700 italic">
                  "A masterclass in building tension and atmosphere. Lubov creates 
                  a claustrophobic world where every creak of the lighthouse becomes 
                  a potential threat. Unputdownable." - Thriller Monthly
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Buy Now - $22.99
              </button>
              <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Read Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 