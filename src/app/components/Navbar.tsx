export default function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-900">Don Lubov</div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
            <a href="#books" className="text-gray-700 hover:text-indigo-600 transition-colors">Books</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
} 