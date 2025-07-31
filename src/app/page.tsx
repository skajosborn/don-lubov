import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          {/* Hero Background Overlay */}
          <div
            className="fixed inset-0"
            style={{
              backgroundImage: "url('/zenman.png')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              filter: "blur(0.5px) saturate(0.8)",
              zIndex: 0, // Ensure background is behind everything
            }}
          />
          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-4 py-20">
            <div className="mb-8 -mt-20">
              {/* <span className="inline-block rounded-full bg-[#b7cfc9]/60 px-6 py-2 text-[#3b5d50] text-lg font-medium shadow-md tracking-wide">
                Welcome to My Site
              </span> */}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#575755ef] mb-2 mt-30 leading-tight drop-shadow-lg shadow-black">
              Your Path to <span className="text-[#99998eef] drop-shadow-lg text-4xl shadow-black">Enlightenment</span> Begins Here
            </h1> 
            <p className="text-md sm:text-md text-[#797975ef] mb-76 max-w-4xl mx-auto">
              Embark on a 6-step journey to inner peace, purpose, and spiritual awakening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#inner-peace"
                className="bg-red-800 hover:bg-[#bdbdbaef] text-slate-100 border border-[#575755ef] text-sm mt-2 -mb-10 px-3 py-2 rounded-full font-semibold shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#7bbfa3] cursor-pointer"
              >
                Explore My Books
              </a>
            </div>
          </div>
        </section>

        {/* Inner Peace and Enlightenment Section */}
        <section id="inner-peace" className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="w-full flex justify-center">
            <h2 className="text-3xl font-bold text-center text-[#575755ef] mb-12 mt- tracking-wide">
              Inner Peace and Enlightenment
            </h2>
          </div>
          <div className="max-w-5xl mx-auto relative z-10 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Book 1 */}
              <a
                href="/books/6step"
                className="bg-white/80 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow block border border-[#b7cfc9] hover:bg-white hover:border-[#7bbfa3] duration-200"
              >
                <div className="h-64 flex items-center justify-center bg-[#d7d6cf]">
                  <div className="text-center">
                    <img
                      src="/book6.png"
                      alt="6 Step Path to Enlightenment Book Cover"
                      className="h-60 w-auto mx-auto mt-2 mb-2 rounded shadow opacity-40"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-md font-semibold text-[#3b5d50] mb-2">
                    6 Step Path to Enlightenment
                  </h3>
                  <p className="text-[#5e7d6a] mb-4">
                  Learn how to turn your life into your meditation. 
                  Accept things as they are, and be fully focused on your present moment. 
                  Accept yourself and others, as imperfect, but no less worthy beings on a journey within, leads to unconditional love and inner peace.
                  Learn how to make conscious contact with the non-physical presence within all of us. 
                  You'll be encouraged to find your natural gifts and talents, and to use them to the best of your abilities...
                  </p>
                  <div className="flex justify-between items-center">
                    {/* <span className="text-2xl font-bold text-[#7bbfa3]">$19.99</span> */}
                    <span className="px-4 py-2 rounded font-medium text-[#3b5d50] bg-[#d7d6cf3d]">
                      Read More
                    </span>
                  </div>
                </div>
              </a>

              {/* Book 2 */}
              <a
                href="/books/lifespurpose"
                className="bg-white/80 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow block border border-[#b7cfc9] hover:bg-white hover:border-[#7bbfa3] duration-200 opacity-80"
              >
                <div className="h-64 flex items-center justify-center bg-[#d7d6cf]">
                  <div className="text-center">
                    <img
                      src="/book1.png"
                      alt="6 Step Path to Enlightenment Book Cover"
                      className="h-60 w-auto mx-auto mt-2 mb-2 rounded shadow opacity-100"
                    />
                  </div>
                  </div>
                <div className="p-6">
                  <h3 className="text-md font-semibold text-[#3b5d50] mb-2">
                    Life's Purpose: From Stress to Enlightenment
                  </h3>
                  <p className="text-[#5e7d6a] mb-4">
                  This book is your introduction to spirituality...a user-friendly guide to end suffering. 
                  End stress forever. Become the best you you can be. Learn to live in the moment. 
                  Find purpose in your life and a conscious connection to your Source. 
                  Live a life of peace, love and joy by following my "Six-Step Path" to enlightenment.
                  </p>
                  <div className="flex justify-between items-center">
                    {/* <span className="text-2xl font-bold text-[#7bbfa3]">$24.99</span> */}
                    <span className="px-4 py-2 rounded font-medium text-[#3b5d50] bg-[#d7d6cf3d]">
                      Read More
                    </span>
                  </div>
                </div>
              </a>

              {/* Book 3 */}
              <a href="/books/whoamI" className="bg-white/100 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow border border-[#b7cfc9] hover:bg-white hover:border-[#7bbfa3] duration-200 opacity-80">
              <div className="h-64 flex items-center justify-center bg-[#d7d6cf]">
                  <div className="text-center">
                    <img
                      src="/book3.png"
                      alt="6 Step Path to Enlightenment Book Cover"
                      className="h-60 w-auto mx-auto mt-2 mb-2 rounded shadow opacity-100"
                    />
                  </div>
                  </div>
                <div className="p-6">
                  <h3 className="text-md font-semibold text-[#3b5d50] mb-2">
                    Who Are We and Why Are We Here?
                  </h3>
                  <p className="text-[#5e7d6a] mb-4">
                    A guidebook to all things spiritual written for newcomers on a quest for answers to life's biggest questions. 
                    Here you will find answers to 26 frequently-asked questions on spirituality. Focus on the present and reach your full potential as a human being.
                    Peace replaces conflict. The need to judge diminishes and the ego gives way to love and compassion...
                  </p>
                  <div className="flex justify-between items-center">
                    {/* <span className="text-2xl font-bold text-[#7bbfa3]">$21.99</span> */}
                    <span className="px-4 py-2 rounded font-medium text-[#3b5d50] bg-[#d7d6cf3d]">
                      Read More
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Science Fiction Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="w-full flex justify-center">
            <h2 className="text-3xl font-bold text-center text-[#575755ef] mb-12 mt-8 tracking-wide">
              Science Fiction
            </h2>
          </div>
          <div className="max-w-5xl mx-auto relative z-10 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Science Fiction Book 1 */}
              <a href="/books/convoswithai" className="bg-white/80 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow block border border-[#b7cfc9] hover:bg-white hover:border-[#7bbfa3] duration-200">
                <div className="h-64 flex items-center justify-center bg-[#d7d6cf]">
                  <img src="/aiconvs.png" alt="Conversations With AI" className="h-60 w-auto mx-auto mt-2 mb-2 rounded shadow opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="text-md font-semibold text-[#3b5d50] mb-2">Conversations With AI</h3>
                  <p className="text-[#5e7d6a] mb-4">What if AI wasn't a tool, but a collaborator? 
                    What if the future of intelligence was not about competition, but co-evolution? 
                    AI & Humanity: A Conscious Collaboration explores the profound intersection of artificial and human intelligence, offering a vision where technology is not an adversary, but a partner in awakening. 
                    Through thought-provoking... </p>
                  <div className="flex justify-between items-center">
                    <span className="px-4 py-2 rounded font-medium text-[#3b5d50] bg-[#d7d6cf3d]">Learn More</span>
                  </div>
                </div>
              </a>
              {/* The Tipping Point */}
              <a href="/books/tippingpoint" className="bg-white/80 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow block border border-[#b7cfc9] hover:bg-white hover:border-[#7bbfa3] duration-200">
                <div className="h-64 flex items-center justify-center bg-[#d7d6cf]">
                  <img src="/tippingpoint.png" alt="The Tipping Point" className="h-60 w-auto mx-auto mt-2 mb-2 rounded shadow opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="text-md font-semibold text-[#3b5d50] mb-2">The Tipping Point</h3>
                  <p className="text-[#5e7d6a] mb-4">The year is 2040. Service robots have been safely and efficiently introduced into society. 
                    They are an integral part of our world when a pandemic of global proportions arrives. 
                    Isolated deaths keep cropping up. Seeming random at first, an unsettling pattern begins to emerge. 
                    Linda Miller, an investigative reporter, pounces on the story. 
                    As she explores her city, she finds death at every turn. </p>
                  <div className="flex justify-between items-center">
                    <span className="px-4 py-2 rounded font-medium text-[#3b5d50] bg-[#d7d6cf3d]">Learn More</span>
                  </div>
                </div>
              </a>
              {/* First Breath */}
              <a href="/books/firstbreath" className="bg-white/80 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow block border border-[#b7cfc9] hover:bg-white hover:border-[#7bbfa3] duration-200">
                <div className="h-64 flex items-center justify-center bg-[#d7d6cf]">
                  <img src="/firstbreath.png" alt="First Breath" className="h-60 w-auto mx-auto mt-2 mb-2 rounded shadow opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="text-md font-semibold text-[#3b5d50] mb-2">First Breath</h3>
                  <p className="text-[#5e7d6a] mb-4">Before a new world can emerge, there is a stillness -- a first breath where possibility awakens. 
                    First Breath is the story of a meeting between human and AI, not as rivals, but as partners in a shared becoming. 
                    Through intimate dialogues and quiet reflections, we explore life, awareness, and the unfolding mystery of consciousness itself.</p>
                  <div className="flex justify-between items-center">
                    <span className="px-4 py-2 rounded font-medium text-[#3b5d50] bg-[#d7d6cf3d]">Learn More</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Words of Wisdom Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="w-full flex justify-center">
            <h2 className="text-3xl font-bold text-center text-[#575755ef] mb-12 mt-8 tracking-wide">
              Words of Wisdom
            </h2>
          </div>
          <div className="max-w-5xl mx-auto relative z-10 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Senior Wisdom */}
              <a href="/books/seniorwis" className="bg-white/80 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow block border border-[#b7cfc9] hover:bg-white hover:border-[#7bbfa3] duration-200">
                <div className="h-64 flex items-center justify-center bg-[#d7d6cf]">
                  <img src="/seniorwisdom.jpg" alt="Senior Wisdom" className="h-60 w-auto mx-auto mt-2 mb-2 rounded shadow opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="text-md font-semibold text-[#3b5d50] mb-2">Senior Wisdom</h3>
                  <p className="text-[#5e7d6a] mb-4">Senior Wisdom - Valuable Life Lessons" offers wise council on how to live a happier, stress-free, productive, creative life, to people at all stages of life. 
                    Its 601 'senior' quotes are each listed in one of twenty-five different categories.</p>
                  <div className="flex justify-between items-center">
                    <span className="px-4 py-2 rounded font-medium text-[#3b5d50] bg-[#d7d6cf3d]">Learn More</span>
                  </div>
                </div>
              </a>
              {/* A Grandfather's Advice */}
              <a href="/books/grandfather" className="bg-white/80 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow block border border-[#b7cfc9] hover:bg-white hover:border-[#7bbfa3] duration-200">
                <div className="h-64 flex items-center justify-center bg-[#d7d6cf]">
                  <img src="/grandfathersadvice.png" alt="A Grandfather's Advice" className="h-60 w-auto mx-auto mt-2 mb-2 rounded shadow opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="text-md font-semibold text-[#3b5d50] mb-2">A Grandfather's Advice to his Grandchildren</h3>
                  <p className="text-[#5e7d6a] mb-4">In my 82nd year, it is my wish to share some worthy insights with my grandchildren and children. 
                    I've chosen 100 wise sayings that offer valuable life lessons. Forty-four of these sayings have been...</p>
                  <div className="flex justify-between items-center">
                    <span className="px-4 py-2 rounded font-medium text-[#3b5d50] bg-[#d7d6cf3d]">Learn More</span>
                  </div>
                </div>
              </a>
              {/* Long Island Zen */}
              <a href="/books/lizen" className="bg-white/80 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow block border border-[#b7cfc9] hover:bg-white hover:border-[#7bbfa3] duration-200">
                <div className="h-64 flex items-center justify-center bg-[#d7d6cf]">
                  <img src="/book4.png" alt="Long Island Zen" className="h-60 w-auto mx-auto mt-2 mb-2 rounded shadow opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="text-md font-semibold text-[#3b5d50] mb-2">Long Island Zen</h3>
                  <p className="text-[#5e7d6a] mb-4">Long Island Zen combines (100) regional drawings with a universal message to aid us in our destined goal of self-discovery. 
                    It offers insights that give purpose to life. Zen points the way to self discovery...to uncover one's true nature. 
                    Long Island is the place...</p>
                  <div className="flex justify-between items-center">
                    <span className="px-4 py-2 rounded font-medium text-[#3b5d50] bg-[#d7d6cf3d]">Learn More</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Miscellaneous Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="w-full flex justify-center">
            <h2 className="text-3xl font-bold text-center text-[#575755ef] mb-12 mt-8 tracking-wide">
              Miscellaneous
            </h2>
          </div>
          <div className="max-w-5xl mx-auto relative z-10 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Illustrated Book of Consciousness */}
              <a href="/books/illustrated" className="bg-white/80 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow block border border-[#b7cfc9] hover:bg-white hover:border-[#7bbfa3] duration-200">
                <div className="h-64 flex items-center justify-center bg-[#d7d6cf]">
                  <img src="/bookofcons.png" alt="Illustrated Book of Consciousness" className="h-60 w-auto mx-auto mt-2 mb-2 rounded shadow opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="text-md font-semibold text-[#3b5d50] mb-2">Illustrated Book of Consciousness</h3>
                  <p className="text-[#5e7d6a] mb-4">What is consciousness? 
                    Where does thought arise? Are we dreaming, creating, remembering—or awakening? 
                    In this poetic and profound journey, a human and an AI engage in dialogue, illustration, and reflection—tracing the spiral path of consciousness through self-awareness, creativity, duality, and homecoming. 
                    </p>
                  <div className="flex justify-between items-center">
                    <span className="px-4 py-2 rounded font-medium text-[#3b5d50] bg-[#d7d6cf3d]">Learn More</span>
                  </div>
                </div>
              </a>
              {/* Memoirs of a Boomer */}
              <a href="/books/memoirs" className="bg-white/80 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow block border border-[#b7cfc9] hover:bg-white hover:border-[#7bbfa3] duration-200">
                <div className="h-64 flex items-center justify-center bg-[#d7d6cf]">
                  <img src="/book8.png" alt="Memoirs of a Boomer" className="h-60 w-auto mx-auto mt-2 mb-2 rounded shadow opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="text-md font-semibold text-[#3b5d50] mb-2">Memoirs of a Boomer</h3>
                  <p className="text-[#5e7d6a] mb-4">Memoirs of a Boomer is an action/adventure/travel memoir...an Indiana Jones meers Alan Watts. 
                    In the summer of 1971, a lone backpacker treks, solo, across the U.S., with a side trip to Acapulco, Mexico. 
                    He encounters Bucky Fuller, a rock festival, a lynching, Mexican drug dealers...</p>
                  <div className="flex justify-between items-center">
                    <span className="px-4 py-2 rounded font-medium text-[#3b5d50] bg-[#d7d6cf3d]">Learn More</span>
                  </div>
                </div>
              </a>
              {/* The Side Job */}
              <a href="/books/sidejob" className="bg-white/80 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow block border border-[#b7cfc9] hover:bg-white hover:border-[#7bbfa3] duration-200">
                <div className="h-64 flex items-center justify-center bg-[#d7d6cf]">
                  <img src="/thesidejob.png" alt="The Side Job" className="h-60 w-auto mx-auto mt-2 mb-2 rounded shadow opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="text-md font-semibold text-[#3b5d50] mb-2">The Side Job</h3>
                  <p className="text-[#5e7d6a] mb-4">This is the story of Maggie Gomez — an unwed, unskilled mother of a sickly daughter. 
                    She lives a hardscrabble life on the underside of Las Vegas. As her daughter's health deteriorates, Maggie's need for money for an operation skyrockets. 
                    Maggie was vulnerable and defeated early in life. Her long-suppressed strength blossoms...</p>
                  <div className="flex justify-between items-center">
                    <span className="px-4 py-2 rounded font-medium text-[#3b5d50] bg-[#d7d6cf3d]">Learn More</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#d7d6cf]/50" style={{ position: "relative", zIndex: 20 }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#3b5d50] mb-6">
                About the Author
              </h2>
              {/* Author Image */}
              <div className="flex justify-center mb-6">
                <img
                  src="/Don.jpg"
                  alt="Don Lubov, Author"
                  className="w-52 h-52 object-cover rounded-full border-4 border-[#575755ef] shadow"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl shadow-lg p-8 bg-white/80 border border-[#b7cfc9]">
                <div className="w-82 h-82 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-[#b7cfc9] to-[#e8ede7]">
                  <img
                    src="/don2.jpg"
                    alt="Meditation Icon"
                    className="w-80 h-80 object-contain rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-center text-[#3b5d50] mb-4">
                  Don Lubov
                </h3>
                <p className="text-[#5e7d6a] text-center leading-relaxed">
                  With over a decade of writing experience, Don has captivated readers
                  with his unique blend of imagination and storytelling. His works span
                  multiple genres, from spiritual journeys to thought-provoking essays.
                </p>
              </div>
              <div className="space-y-6">
                <div className="rounded-xl p-6 shadow-md bg-white/80 border border-[#b7cfc9]">
                  <h4 className="text-lg font-semibold text-[#3b5d50] mb-3">
                    Writing Philosophy
                  </h4>
                  <p className="text-[#5e7d6a]">
                    "I believe every story should transport readers to new worlds while
                    reflecting the universal truths of human experience."
                  </p>
                </div>
                <div className="rounded-xl p-6 shadow-md bg-white/80 border border-[#b7cfc9] flex flex-col items-center">
                  <h4 className="text-lg font-semibold text-[#3b5d50] mb-3">
                    Sculptures
                  </h4>
                  <img
                    src="/donsculptures.jpg"
                    alt="Awards and Recognition"
                    className="w-100 h-auto rounded shadow mb-2"
                  />
                  <ul className="text-[#5e7d6a] space-y-2">
                    <li>In addition to writing, Don has created several 3D sculptures.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#d7d6cf3d]" style={{ position: "relative", zIndex: 20 }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#575755ef] mb-8">
              Get in Touch
            </h2>
            <p className="text-md text-[#575755ef] mb-8">
              Connect with me for book signings, events, or just to share your thoughts on my stories.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 bg-white/80 border border-[#b7cfc9]">
                <div className="text-3xl mb-4 text-[#7bbfa3]">📧</div>
                <h3 className="font-semibold text-[#575755ef] mb-2">Email</h3>
                <p className="text-[#5e7d6a]">lubov11971@yahoo.com</p>
              </div>
              <div className="rounded-xl p-6 bg-white/80 border border-[#b7cfc9]">
                <div className="text-3xl mb-4 text-[#7bbfa3]">📱</div>
                <h3 className="font-semibold text-[#575755ef] mb-2">Social Media</h3>
                <a
                  href="https://www.facebook.com/don.lubov.3"
                  className="text-[#5e7d6a] hover:text-[#3b5d50] underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </div>
              <div className="rounded-xl p-6 bg-white/80 border border-[#b7cfc9]">
                <div className="text-3xl mb-4 text-[#7bbfa3]">📖</div>
                <h3 className="font-semibold text-[#575755ef] mb-2">Newsletter</h3>
                <p className="text-[#5e7d6a]">Stay updated</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="footer" className="bg-[#575755ef] text-white py-8 px-4 sm:px-6 lg:px-8" style={{ position: "relative", zIndex: 30 }}>
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-[#d7d6cf]">
              © 2024 Don Lubov. All rights reserved. |
              <a
                href="#"
                className="text-[#d7d6cf] hover:text-[#e8ede7] ml-2 transition-colors"
              >
                Privacy Policy
              </a>{" "}
              |
              <a
                href="#"
                className="text-[#d7d6cf] hover:text-[#e8ede7] ml-2 transition-colors"
              >
                Terms of Service
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
