import { Link } from "react-router-dom";
import { FaFeatherAlt, FaMagic, FaRocket } from "react-icons/fa";

function Home() {
  return (
    <div className="w-full mx-auto font-varela">
      <div className="flex flex-col justify-center bg-black items-center w-full h-[550px]">
        <header className="text-center mb-8">
          <div className="absolute h-full w-full inset-0  bg-black bg-[linear-gradient(to_right,rgba(128,128,128,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.2)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
          <div className="relative z-10 p-4">
            <h1 className="text-7xl font-righteous font-bold mb-2 text-white">
              Minimalist UI for the web.
            </h1>
            <p className="text-xl mt-4 font-varela text-gray-400">
              Zen UI provides minimalist and simple UI components for your
              projects.
            </p>
          </div>
        </header>
      </div>
      <main>
        <section className="flex flex-col justify-center items-center w-full h-[600px] bg-black relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center w-full h-full">
            <h2 className="text-4xl font-bold mb-8 mt-20 text-white">
              About Zen UI
            </h2>
            <div className="w-full flex flex-col md:flex-row justify-center items-center mt-4">
              <div className="p-8 px-12 w-full md:w-[30%] m-4 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 text-center">
                <FaFeatherAlt className="text-5xl text-white mb-4" />
                <h3 className="text-2xl text-white font-bold mb-2">
                  Lightweight
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  Zen UI components are designed to be lightweight and fast,
                  ensuring quick load times and a smooth user experience.
                </p>
              </div>

              <div className="p-8 px-12 w-full md:w-[30%] m-4 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 text-center">
                <FaMagic className="text-5xl text-white mb-4" />
                <h3 className="text-2xl text-white font-bold mb-2">
                  Customizable
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  Easily customize each component to match your design needs.
                  Zen UI offers flexibility with a minimalist touch.
                </p>
              </div>

              <div className="p-8 px-12 w-full md:w-[30%] m-4 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 text-center">
                <FaRocket className="text-5xl text-white mb-4" />
                <h3 className="text-2xl text-white font-bold mb-2">
                  Fast Development
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  Accelerate your development with easy-to-use, pre-designed
                  components, so you can focus on functionality.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
        </section>
        <section className="flex flex-col justify-center items-center w-full h-[500px]  bg-black bg-[linear-gradient(to_right,rgba(128,128,128,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.2)_1px,transparent_1px)] bg-[size:48px_48px]">
          <h2 className="text-4xl text-white font-bold mb-8 mt-[-5rem]">
            Features
          </h2>
          <ul className="list-disc list-inside text-2xl text-gray-400 space-y-4 leading-relaxed">
            <li>
              Minimal Design: Focused on clean, modern aesthetics to enhance
              your application’s visual appeal.
            </li>
            <li>
              Easy to Use: Simple API and well-documented components make
              integration straightforward.
            </li>
            <li>
              Customizable: Easily tweak components to fit your specific design
              needs.
            </li>
            <li>
              Lightweight: Optimized for performance, ensuring fast load times
              and smooth user experiences.
            </li>
          </ul>
        </section>
        <section className="flex flex-col justify-center bg-black items-center w-full h-[500px]">
          <h2 className="text-4xl text-white font-bold mb-8 mt-[-5rem]">
            Get Started
          </h2>
          <div className="flex justify-center items-center py-4 px-24 w-full mx-auto">
            <p className="text-gray-400 leading-relaxed text-2xl">
              Explore our library of components and see how Zen UI can simplify
              your development process.
              Check out the code examples to start integrating Zen UI into your projects today.
            </p>
          </div>
          <Link
            to="/components"
            className="text-white bg-gradient-to-r from-purple-600 via-pink-600 to-red-600  hover:bg-none hover:border hover:border-gray-100/25 hover:text-white px-8 py-4 mt-4 rounded-md transition-colors duration-400"
          >
            View Components
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Home;
