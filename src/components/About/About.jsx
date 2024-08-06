import {
  FaReact,
  FaCss3Alt,
  FaCloudUploadAlt,
  FaCode,
  FaNodeJs,
  FaBookOpen,
  FaGitAlt,
  FaBolt
} from "react-icons/fa";

function About() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-black bg-[linear-gradient(to_right,rgba(128,128,128,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.2)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-[-1] text-gray-100">
      <section className="mb-16 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-12 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-white mb-4">About ZenUI</h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          ZenUI is a minimalist and intuitive UI components library designed to
          elevate web development with a focus on simplicity and elegance.
          Drawing inspiration from the sleek design language of iOS, ZenUI
          provides a collection of versatile and stylish components, ensuring a
          seamless and aesthetically pleasing user experience.
        </p>
      </section>

      <section className="mb-16 bg-gray-800 py-12 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center">
          Tools Used
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-8">
          <div className="flex flex-col items-center border border-white/25 p-6 rounded-md">
            <FaReact className="text-blue-400 text-6xl mb-4" />
            <span className="text-xl font-semibold text-gray-100">React</span>
            <p className="text-center text-gray-400 mt-2">
              A powerful JavaScript library for building dynamic user interfaces
              using a component-based architecture.
            </p>
          </div>
          <div className="flex flex-col items-center border border-white/25 rounded-md p-6">
            <FaCss3Alt className="text-teal-400 text-6xl mb-4" />
            <span className="text-xl font-semibold text-gray-100">
              Tailwind CSS
            </span>
            <p className="text-center text-gray-400 mt-2">
              A utility-first CSS framework for rapidly building custom user
              interfaces with consistent design principles.
            </p>
          </div>
          <div className="flex flex-col items-center border border-white/25 rounded-md p-6">
            <FaCloudUploadAlt className="text-blue-400 text-6xl mb-4" />
            <span className="text-xl font-semibold text-gray-100">
              Vercel Deployment
            </span>
            <p className="text-center text-gray-400 mt-2">
              A cloud platform for static sites and serverless functions,
              enabling developers to deploy websites and applications with ease.
            </p>
          </div>
          <div className="flex flex-col items-center border border-white/25 rounded-md p-6">
            <FaCode className="text-gray-300 text-6xl mb-4" />
            <span className="text-xl font-semibold text-gray-100">
              JavaScript (JSX)
            </span>
            <p className="text-center text-gray-400 mt-2">
              A syntax extension for JavaScript, enabling the creation of HTML
              elements within React components.
            </p>
          </div>
          <div className="flex flex-col items-center border border-white/25 rounded-md p-6">
            <FaNodeJs className="text-green-500 text-6xl mb-4" />
            <span className="text-xl font-semibold text-gray-100">Node.js</span>
            <p className="text-center text-gray-400 mt-2">
              A JavaScript runtime built on Chrome&apos;s V8 engine, used for
              building fast and scalable server-side applications.
            </p>
          </div>
          <div className="flex flex-col items-center border border-white/25 rounded-md p-6">
            <FaBookOpen className="text-purple-500 text-6xl mb-4" />
            <span className="text-xl font-semibold text-gray-100">
              Storybook
            </span>
            <p className="text-center text-gray-400 mt-2">
              An open-source tool for developing UI components in isolation,
              making it easy to build and test components independently.
            </p>
          </div>
          <div className="flex flex-col items-center border border-white/25 rounded-md p-6">
            <FaGitAlt className="text-orange-500 text-6xl mb-4" />
            <span className="text-xl font-semibold text-gray-100">Git</span>
            <p className="text-center text-gray-400 mt-2">
              A distributed version control system that helps developers track
              changes in source code during software development, facilitating
              collaboration.
            </p>
          </div>
          <div className="flex flex-col items-center border border-white/25 rounded-md p-6">
            <FaBolt className="text-yellow-400 text-6xl mb-4" />
            <span className="text-xl font-semibold text-gray-100">Vite</span>
            <p className="text-center text-gray-400 mt-2">
              A next-generation frontend tooling providing lightning-fast
              development experience, with support for hot module replacement
              and modern JavaScript.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 py-12 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-gray-100 mb-8 text-center">
          About the Creator
        </h2>
        <div className="flex items-center justify-center">
          <div className="flex justify-center items-center">
            <img
              src="https://via.placeholder.com/300x300"
              alt="Creator"
              className="w-48 h-48 rounded-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <p className="text-xl text-gray-300 leading-relaxed text-center md:text-left">
              The creator of ZenUI is a dedicated web developer with a passion
              for crafting beautiful and functional user interfaces. With a deep
              appreciation for the clean aesthetics of iOS, they focus on
              developing tools that empower developers to create stunning and
              efficient web applications effortlessly. Their expertise in
              front-end development and design ensures that ZenUI not only looks
              great but also performs seamlessly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
