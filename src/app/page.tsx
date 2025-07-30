import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Don Lubov
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Crafting stories that transport readers to extraordinary worlds, 
              where imagination meets reality and every page holds a new adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore My Books
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                About Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Books
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Book 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">📚</div>
                  <p className="text-sm opacity-90">Book Cover</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  The Lost Chronicles
                </h3>
                <p className="text-gray-600 mb-4">
                  A thrilling adventure through ancient ruins and forgotten civilizations.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">$19.99</span>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded font-medium transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Book 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-green-400 to-teal-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">🌿</div>
                  <p className="text-sm opacity-90">Book Cover</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Whisper of the Wind
                </h3>
                <p className="text-gray-600 mb-4">
                  A mystical journey into the heart of nature and human connection.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">$24.99</span>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded font-medium transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Book 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-red-400 to-pink-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">⚡</div>
                  <p className="text-sm opacity-90">Book Cover</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Echoes of Tomorrow
                </h3>
                <p className="text-gray-600 mb-4">
                  A sci-fi thriller exploring the boundaries of time and consciousness.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">$21.99</span>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded font-medium transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About the Author
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl text-white">👨‍💻</span>
              </div>
              <h3 className="text-2xl font-semibold text-center text-gray-900 mb-4">
                Don Lubov
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                With over a decade of writing experience, Don has captivated readers 
                with his unique blend of imagination and storytelling. His works span 
                multiple genres, from fantasy adventures to thought-provoking sci-fi.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Writing Philosophy
                </h4>
                <p className="text-gray-600">
                  "I believe every story should transport readers to new worlds while 
                  reflecting the universal truths of human experience."
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Awards & Recognition
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Best Fantasy Novel 2023</li>
                  <li>• Readers' Choice Award 2022</li>
                  <li>• Featured in Literary Digest</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Connect with me for book signings, events, or just to share your thoughts on my stories.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">don@donlubov.com</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-semibold text-gray-900 mb-2">Social Media</h3>
              <p className="text-gray-600">@donlubov</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl mb-4">📖</div>
              <h3 className="font-semibold text-gray-900 mb-2">Newsletter</h3>
              <p className="text-gray-600">Stay updated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Don Lubov. All rights reserved. | 
            <a href="#" className="text-indigo-400 hover:text-indigo-300 ml-2">Privacy Policy</a> | 
            <a href="#" className="text-indigo-400 hover:text-indigo-300 ml-2">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
