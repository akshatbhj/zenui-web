import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col justify-center bg-black items-center w-full h-[550px]">
        <header className="text-center mb-8">
          <div className="absolute h-full w-full inset-0  bg-black bg-[linear-gradient(to_right,rgba(128,128,128,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.2)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
          <div className="relative z-10 p-4">
            <h1 className="text-6xl font-bold mb-2 text-white">
              Minimalist UI for the web.
            </h1>
            <p className="text-xl mt-4 text-gray-400">
              Zen UI provides minimalist and simple UI components for your
              projects.
            </p>
          </div>
        </header>
      </div>
      <main>
        <section className="flex flex-col justify-center  bg-black items-center w-full h-[500px]">
          <h2 className="text-3xl font-semibold mb-4 mt-4 text-white">
            About Zen UI
          </h2>
          <div className="w-full flex flex-row justify-center items-center mt-4">
            <div className="p-8 px-12 w-[50%] border border-white/25 m-4">
              <p className="text-gray-400 text-2xl leading-relaxed">
                Zen UI is a minimalist and straightforward UI components library
                for React. Designed with simplicity and elegance in mind, Zen
                provides a set of essential, customizable components to help you
                build clean and efficient user interfaces with ease. Our
                components are lightweight, easy to use, and fully customizable
                to fit your design needs.
              </p>
            </div>
            <div className="p-8 px-12 w-[50%] border border-white/25 m-4">
              <p className="text-gray-400 text-2xl leading-relaxed">
                Zen UI is a minimalist and straightforward UI components library
                for React. Designed with simplicity and elegance in mind, Zen
                provides a set of essential, customizable components to help you
                build clean and efficient user interfaces with ease. Our
                components are lightweight, easy to use, and fully customizable
                to fit your design needs.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center bg-black items-center w-full h-[500px]">
          <h2 className="text-3xl text-white font-semibold mb-8 mt-[-3rem]">
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
          <h2 className="text-3xl text-white font-semibold mb-8 mt-[-5rem]">
            Get Started
          </h2>
          <div className="flex justify-center items-center py-8 px-20 w-full mx-auto">
            <p className="text-gray-400 leading-relaxed text-2xl">
              Explore our library of components and see how Zen UI can simplify
              your development process. Check out the code examples and
              documentation to start integrating Zen UI into your projects
              today.
            </p>
          </div>
          <Link
            to="/components"
            className="text-white hover:bg-white font-semibold hover:text-black border border-white/25 px-8 py-4 mt-4 rounded-md"
          >
            View Components
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Home;
